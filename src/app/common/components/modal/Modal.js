import { Dialog } from 'primereact/dialog';
import { React, useEffect, useState } from 'react';
import { Button } from 'primereact/button';

const Modal = ({showModal, closeModalFlag, modalContent}) => {

    const header = (
        <div>
            This is the header!!
        </div>
    );

    const footer = (
        <div>
            <Button label="Yes" icon="pi pi-check" />
            <Button label="No" icon="pi pi-times" />
        </div>
    );

    return (
        <Dialog style={{width:'50vw'}} visible={showModal} 
        onHide={()=>closeModalFlag()}>
            {modalContent.name}
        </Dialog>
    );
}

export default Modal;