import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import Modal from '../modal/vivienda/modal-vivienda';
import ConfirmModal from '../modal/vivienda/modal-vivienda-delete'; // Asegúrate de importar el componente del modal de confirmación

function Card({ id, direccion, capacidad, niveles }) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

    const handleEditClick = () => {
        setIsEditModalOpen(true);
    };

    const handleCloseEditModal = () => {
        setIsEditModalOpen(false);
    };

    const handleDeleteClick = () => {
        setIsConfirmModalOpen(true);
    };

    const handleCloseConfirmModal = () => {
        setIsConfirmModalOpen(false);
    };

    return (
        <div className="card bg-color-1 rounded-xl p-4 shadow-lg font-lato h-fit" key={id}>
            <div className="flex items-center">
                <FontAwesomeIcon icon={faHome} size="xl" />
                <h2 className='ml-4 text-bold text-lg'>{direccion}</h2>
            </div>
            <p>Propietario: falta--</p>
            <p>Capacidad: {capacidad}</p>
            <p>Niveles: {niveles}</p>
            <button onClick={handleEditClick} className='mr-5 mt-2'>
                <FontAwesomeIcon icon={faEdit} size="lg" />
            </button>
            <button onClick={handleDeleteClick}>
                <FontAwesomeIcon icon={faTrash} color="red" size="lg" />
            </button>
            {isEditModalOpen && <Modal onClose={handleCloseEditModal} />}
            {isConfirmModalOpen && <ConfirmModal onClose={handleCloseConfirmModal} />}
        </div>
    )
}

export default Card;