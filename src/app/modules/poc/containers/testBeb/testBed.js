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
} from '../../../../common/components/dataGrid/dataGridMetadata';

const generateTableDefination = () => {
  const tableDef = new TableDefinition('prodList', 'prdList1');
  const columns = [];
  tableDef.addColumn(new ColumnDefinition('code', 'Item Code', 'code'));
  tableDef.addColumn(new ColumnDefinition('name', 'Short Name', 'name'));
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
      />
    </div>
  );
};

export default TestBed;
