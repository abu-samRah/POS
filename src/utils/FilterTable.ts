export default function applyFilter<T>(
    rows: T[],
    fields: string[],
    query: string
) {
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
