import Modal from 'react-modal';

const CVModal = ({ isOpen, onRequestClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="CV Modal"
        >
            <button onClick={onRequestClose} className='r-10'>Close</button>
            <iframe
                title="CV"
                src="https://docs.google.com/document/d/1-9iyAHWRv6_tfby0hOn5UclAMxxcim46QukHjvyEjdk/edit?usp=drive_link"  // Reemplaza con la ruta correcta a tu archivo PDF
                width="100%"
                height="100%"
            />
        </Modal>
    );
};

export default CVModal;
