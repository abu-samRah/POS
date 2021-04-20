import React, { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Box,
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    CardHeader,
    Divider,
    TextField,
    InputAdornment,
    SvgIcon,
    TableSortLabel,
} from '@material-ui/core';
import orderByFunc from 'lodash/orderBy';
import format from 'date-fns/format';
import useStyles from './style';
import { Search as SearchIcon } from 'react-feather';

export const formatDate = (date: string) =>
    format(new Date(date), 'yyyy-MM-dd');

const genPaginationLabel = ({
    from,
    to,
    count,
}: {
    from: number;
    to: number;
    count: number;
}) => {
    const label = `${from} - ${to} of ${count}`;
    return label;
};

function applyPagination<T>(rows: T[], page: number, limit: number) {
    return rows.slice(page * limit, page * limit + limit);
}

function applyFilter<T>(rows: T[], fields: string[], query: string) {
    if (query.length) {
        return rows.filter((row) =>
            fields.find((field) => {
                //@ts-ignore
                return `${row[field]}`
                    .toLowerCase()
                    .includes(query.toLowerCase());
            })
        );
    }
    return rows;
}

interface TableColumnHeading<T> {
    id: string;
    width: string;
    type?: 'date' | 'text' | 'number';
    Cell?: React.FC<T>;
    Head?: React.FC | string;
    align: 'left' | 'center' | 'right' | 'justify' | 'inherit';
}

interface TableProps<T extends DefaultRow> {
    columns: TableColumnHeading<T>[];
    rows: T[];
    title: string;
    isPaginated: boolean;
}
interface DefaultRow {
    id?: string;
}

export function POSTable<T extends DefaultRow>({
    columns,
    rows,
    title,
    isPaginated,
}: TableProps<T>): JSX.Element {
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(10);
    const [query, setQuery] = useState('');
    const [order, setOrder] = useState({
        by: columns[0].id,
        direction: true,
    });

    const classes = useStyles();

    const handlePageChange = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleLimitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPage(0);
        setLimit(parseInt(event.target.value, 10));
    };

    const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();
        setPage(0);
        setQuery(event.target.value);
    };

    const getOrder = (booleanOrder: boolean) => (booleanOrder ? 'asc' : 'desc');

    const getOrderDir = (columnId: string) =>
        order.by === columnId ? getOrder(order.direction) : getOrder(true);

    const sortHandler = (columnId: string) => {
        setOrder({
            by: columnId,
            direction: order.by === columnId ? !order.direction : true,
        });
    };

    const filteredRows = applyFilter(
        rows,
        columns.map((c) => c.id),
        query
    );

    const sortedRows = orderByFunc(
        filteredRows,
        //@ts-ignore
        (e) => e[order.by]?.toLowerCase(),
        getOrder(order.direction)
    );

    const paginatedRows = applyPagination(sortedRows, page, limit);

    const rowsToShow = isPaginated ? paginatedRows : rows;

    return (
        <Card>
            {title && <CardHeader title={title} />}
            {title && <Divider />}

            <Box p={2} minHeight={56} display="flex" alignItems="center">
                <TextField
                    className={classes.queryField}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SvgIcon fontSize="small" color="action">
                                    <SearchIcon />
                                </SvgIcon>
                            </InputAdornment>
                        ),
                    }}
                    onChange={handleQueryChange}
                    placeholder="Search"
                    value={query}
                    variant="outlined"
                />
            </Box>
            <PerfectScrollbar>
                <Box minWidth={900}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {columns.map((column) =>
                                    typeof column.Head === 'object' ||
                                    typeof column.Head === 'function' ? (
                                        <TableCell
                                            className={classes.header}
                                            key={column.id}
                                            align={column.align}
                                            width={column.width}
                                        >
                                            {column.id}
                                        </TableCell>
                                    ) : (
                                        <TableCell
                                            className={classes.header}
                                            key={column.id}
                                            align={column.align}
                                            width={column.width}
                                        >
                                            <TableSortLabel
                                                active={order.by === column.id}
                                                direction={getOrderDir(
                                                    column.id
                                                )}
                                                onClick={() =>
                                                    sortHandler(column.id)
                                                }
                                            >
                                                {column.id}
                                            </TableSortLabel>
                                        </TableCell>
                                    )
                                )}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {console.log(rowsToShow)}
                            {rowsToShow.map((row) => (
                                <TableRow hover key={row.id}>
                                    {columns.map((column) =>
                                        column.Cell ? (
                                            <TableCell
                                                key={row.id}
                                                className={classes.pointer}
                                            >
                                                <column.Cell {...row} />
                                            </TableCell>
                                        ) : (
                                            <TableCell
                                                key={column.id}
                                                align="left"
                                            >
                                                {column.type === 'date'
                                                    ? formatDate(
                                                          //@ts-ignore
                                                          row[column.id]
                                                      )
                                                    : //@ts-ignore
                                                      row[column.id]}
                                            </TableCell>
                                        )
                                    )}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </PerfectScrollbar>
            {isPaginated && (
                <TablePagination
                    component="div"
                    count={rows.length}
                    onChangePage={handlePageChange}
                    onChangeRowsPerPage={handleLimitChange}
                    page={page}
                    rowsPerPage={limit}
                    rowsPerPageOptions={[10, 25, 50, 100]}
                    labelDisplayedRows={genPaginationLabel}
                />
            )}
        </Card>
    );
}

//***************************************************************************** */
/* interface MyRow {
    id: string;
    name: string;
}

const ActionsCell: React.FC<MyRow> = ({ id }) => {
    const handleClick = () => {};
    return <Button onClick={handleClick}>khalid</Button>;
}; */

/* const example = () => {
    return (
        <POSTable<MyRow>
            rows={[{ id: 'name', name: 'samrah' }]}
            columns={[
                {
                    id: 'name',
                    align: 'left',
                    Head: '',
                    width: '100',
                },
                {
                    id: 'date',
                    align: 'left',
                    Head: '',
                    width: '100',
                },
                {
                    id: 'datex',
                    align: 'left',
                    Head: '',
                    width: '100',
                },
                {
                    id: 'acitons',
                    align: 'left',
                    width: '100',
                    Head: TableCell,
                    Cell: ActionsCell,
                },
            ]}
        ></POSTable>
    );
};
 */
