import React from 'react';
import { exportToExcel } from '../utils/exportToExcel';
import { useSelector } from 'react-redux';

const TableToolbar = ({ setGlobalFilter }) => {
  const data = useSelector((state) => state.table.filteredData);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setGlobalFilter(e.target.value)}
      />
      <button onClick={() => exportToExcel(data)}>Export to Excel</button>
    </div>
  );
};

export default TableToolbar;
