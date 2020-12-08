/* eslint-disable  */
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from 'react';

const DataGrid = (props) => {
  const [tableMetaData, setTableMetaData] = useState(props.tableMetaData);

  const dynamicColumns = tableMetaData
    .getColumns()
    .filter((col) => col.visibility)
    .map((col, i) => {
      return (
        <Column
          columnKey={col.id}
          field={col.dataField}
          header={col.header}
          style={{ width: col.width }}
          {...(col.sortable ? { sortable: true } : {})}
        />
      );
    });

  const onColumnResizeHandler = (event) => {
    console.log('Resized Event ', event);
    // find column by columnID aka columnKey
    // update the metadata for the column
  };

  return (
    <DataTable
      value={props.dataSource}
      scrollable
      {...(tableMetaData.isColumnResizable
        ? {
            resizableColumns: true,
            onColumnResizeEnd: onColumnResizeHandler,
          }
        : {})}
    >
      {dynamicColumns}
    </DataTable>
  );
};

export default DataGrid;
