export const genPaginationLabel = ({
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

export function applyPagination<T>(rows: T[], page: number, limit: number) {
    return rows.slice(page * limit, page * limit + limit);
}
