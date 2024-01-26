declare const CommonTable: (props: {
    title?: string | undefined;
    columns?: any[] | undefined;
    dataSource?: any[] | undefined;
    loading?: boolean | undefined;
    onSearch?: ((e: any) => void) | undefined;
    onAddItem?: ((e: any) => void) | undefined;
    onChangePage?: ((page: number, pageSize: number) => void) | undefined;
}) => import("react/jsx-runtime").JSX.Element;
export default CommonTable;
