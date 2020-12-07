/* eslint-disable  */
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const DataGrid = (props) => {
  const columns = props.tableMetaData.getColumns().map((col) => {
    return { field: col.dataField, header: col.header };
  });

  const dynamicColumns = columns.map((col, i) => {
    return (
      <Column sortable key={col.field} field={col.field} header={col.header} />
    );
  });

  return <DataTable value={props.dataSource}>{dynamicColumns}</DataTable>;
};

export default DataGrid;
