/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applicationLoadedSuccessfully } from '../../../../common/redux/actions/commonActions';
import DataGrid from '../../../../common/components/dataGrid/dataGrid';
import {
  TableDefinition,
  ColumnDefinition,
  COLUMN_TYPE,
  ActionDefinition,
} from '../../../../common/components/dataGrid/dataGridMetadata';

import { actionBodyGenerator } from '../../../../common/components/dataGrid/dataGridUtil';

const generateTableDefination = () => {
  const tableDef = new TableDefinition('prodList', 'prdList1');

  tableDef.addColumn(new ColumnDefinition('code', 'Item Code', 'code', COLUMN_TYPE.TEXT, true));
  tableDef.addColumn(new ColumnDefinition('name', 'Short Name', 'name', COLUMN_TYPE.TEXT, true));
  tableDef.addColumn(
    new ColumnDefinition('category', 'Category', 'category', COLUMN_TYPE.TEXT, true, true),
  );

  const actionColumn = new ColumnDefinition('action', 'Action', null, COLUMN_TYPE.ACTION, false, true, '300px');
  const editAction = new ActionDefinition('edit', 'Edit', 'pi pi-pencil', 'pi pi-user-edit', (rowData, colData) => {
    console.log('Edit Handler Row Data', rowData);
    console.log('Edit Handler Column Data', colData);
    alert('Edit Handler');
  }, 1);
  const deleteAction = new ActionDefinition('delete', 'Deleted', 'pi pi-trash', 'p-button-rounded p-button-warning', (rowData, colData) => {
    console.log('Delete Handler Row Data', rowData);
    console.log('Delete Handler Column Data', colData);
    alert('Delete Handler');
  }, 1);

  actionColumn.addAction(editAction);
  actionColumn.addAction(deleteAction);
  actionColumn.body = actionBodyGenerator(actionColumn.actions,
    (action, rowData, columnData) => action && rowData && columnData);

  tableDef.addColumn(actionColumn);
  tableDef.setColumnResizable();
  return tableDef;
};

const TestBed = (props) => {
  const dispatch = useDispatch();
  const currentStore = useSelector((state) => state);
  // applicationLoadedSuccessfully();
  // dispatch(applicationLoadedSuccessfully());
  const products = [
    { code: 'A01', name: 'Item 1', category: 'Electronics', quantity: '10' },
    { code: 'A02', name: 'Item 2', category: 'Mechanical', quantity: '20' },
  ];

  return (
    <div>
      <DataGrid
        dataSource={products}
        tableMetaData={generateTableDefination()}
        // eslint-disable-next-line no-console
        onTableMetaDataChange={(data) => console.log('Changed Metadata', data)}
      />
    </div>
  );
};

export default TestBed;
