import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import "./ExcelTable.css";

const ExcelTransposeTable = ({ data }) => {
  const transposedData = transposeData(data);

  const columns = Object.keys(transposedData[0]).map((key) => ({
    header: key.toUpperCase(),
    accessorKey: key,
  }));

  const table = useReactTable({
    data: transposedData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="excel-table transpose-table">
      {/* <thead style={{ display: "none" }}></thead>  */}
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell, index) => (
              <td
                key={cell.id}
                className={index === 0 ? "first-column" : ""}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExcelTransposeTable;

// Helper function
const transposeData = (data) => {
  const keys = Object.keys(data[0]);
  return keys.map((key) => {
    const row = { Header: key };
    data.forEach((item, index) => {
      row[`Value${index + 1}`] = item[key];
    });
    return row;
  });
};