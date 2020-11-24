/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import Modal from '../../../../../common/components/modal/Modal';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import PageHeader from '../../../../../common/components/pageHeader/pageHeader';

const certificationList = [
  {
    certificationName: 'FSE',
    totalResource: '24',
    completedCount: '16',
    inCompletedCount: '8',
  },
  {
    certificationName: 'Python',
    totalResource: '20',
    completedCount: '16',
    inCompletedCount: '8',
  },
];

const CertificationList = () => {
  const [certifications, setCertifications] = useState('');
  const [reset, serResetValue] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  useEffect(() => {
    setCertifications(certificationList);
  });

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success p-mr-2"
          onClick={() => editProduct(rowData)}
        >
          <i className="pi pi-user-edit"></i>
        </Button>
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-warning"
          onClick={() => confirmDeleteProduct(rowData)}
          label="Delete"
        />
      </React.Fragment>
    );
  };
  console.log('certificationList', certificationList);
  return (
    <div>
      <PageHeader
        primaryHeading="Certification"
        secondaryHeading="Test"
      ></PageHeader>
      <div className="card">
        <DataTable value={certificationList} paginator rows={2}>
          <Column
            field="certificationName"
            header="Certification Name"
            filter
            filterPlaceholder="Search by Certificaiton Name"
          />
          <Column
            field="totalResource"
            header="Total Resources"
            filter
            filterPlaceholder="Search by Total Resources"
          />
          <Column field="completedCount" header="Completed" />
          <Column field="inCompletedCount" header="Incomplete" />
          <Column body={actionBodyTemplate}></Column>
        </DataTable>
      </div>
      <Modal
        closeModalFlag={() => setShowModal(false)}
        showModal={showModal}
        modalContent={modalContent}
      />
    </div>
  );
};
export default CertificationList;
