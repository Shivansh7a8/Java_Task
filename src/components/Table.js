import React from 'react';
import { useSelector } from 'react-redux';
import { useTable, usePagination, useSortBy, useGlobalFilter } from 'react-table';
import TableToolbar from './TableToolbar';

const Table = () => {
  const data = useSelector((state) => state.table.filteredData);

  const columns = React.useMemo(() => [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Name', accessor: 'name' },
    { Header: 'Email', accessor: 'email' },
    { Header: 'Role', accessor: 'role' },
  ], []);

  const { 
    getTableProps, 
    getTableBodyProps, 
    headerGroups, 
    rows, 
    prepareRow,
    // state,
    setGlobalFilter
  } = useTable(
    { columns, data }, 
    useGlobalFilter, useSortBy, usePagination
  );

  return (
    <div>
      <TableToolbar setGlobalFilter={setGlobalFilter} />
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
