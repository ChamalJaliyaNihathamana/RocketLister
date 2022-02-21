import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';

interface CustomModalComponentProps {
    onHide: any;
    show: boolean;
  }

const CustomModal = React.forwardRef((props: any, ref) => {

    const { show, confirmButtonText, confirmButtonAction, showConfirmCallToAction } = props;

    const [showModal, setShowModal] = useState<boolean>();

    useEffect(() => {
        setShowModal(show);
    }, [show])

    const handleClose = () => {
        setShowModal(false);
        props.close();
    }

    return (

        <Modal show={showModal} onHide={handleClose}>
            <>
                {props.children}
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    {
                        showConfirmCallToAction && showConfirmCallToAction === true &&
                        <Button variant="primary" className="ModalButton" onClick={confirmButtonAction}>
                            {confirmButtonText}
                        </Button>
                    }

                </Modal.Footer>
            </>
        </Modal >
    );
})

export default CustomModal