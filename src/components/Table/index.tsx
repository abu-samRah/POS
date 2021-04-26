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
import formatDate from '../../utils/DateFormat';
import useStyles from './style';
import { Search as SearchIcon } from 'react-feather';
import { genPaginationLabel, applyPagination } from '../../utils/Pagenation';
import applyFilter from '../../utils/FilterTable';

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
