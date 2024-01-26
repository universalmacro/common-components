import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, Button, Input } from "antd";
const CommonTable = (props) => {
    const { title, loading, columns, onChangePage, onSearch, dataSource, onAddItem, } = props;
    return (_jsx("div", { children: _jsx("div", { className: "mt-5 grid h-full grid-cols-1 gap-5", children: _jsxs("div", { children: [onAddItem && (_jsxs("div", { className: "flex justify-between", children: [_jsx("p", { className: "mb-4 inline text-xl", children: title }), " ", _jsx(Button, { onClick: onAddItem, children: "+ \u65B0\u589E" })] })), onSearch && (_jsx(Input.Search, { style: { margin: "0 0 10px 0" }, placeholder: "\u8ACB\u8F38\u5165 ID / \u89D2\u8272 / \u8CEC\u865F \u7B49\u641C\u7D22...", enterButton: true, onSearch: onSearch })), _jsx(Table, { dataSource: dataSource, columns: columns, loading: loading, pagination: {
                            onChange: onChangePage,
                        } })] }) }) }));
};
export default CommonTable;
