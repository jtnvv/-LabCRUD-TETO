import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faTrash } from '@fortawesome/free-solid-svg-icons'
import ConfirmModal from '../modal/trabajo/modal-trabajo-delete'
import { useState } from 'react'
function Card({ idtrabajo, cargo, empresa, salario, idpersona }) {
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const handleDeleteClick = () => {
        setIsConfirmModalOpen(true);
    };

    const handleCloseConfirmModal = () => {
        setIsConfirmModalOpen(false);
    };
    return (
        <div className="card bg-color-1 rounded-xl p-4 shadow-lg font-lato h-fit" key={idtrabajo}>
            <div className="flex items-center">
                <FontAwesomeIcon icon={faUser} size="xl" />
                <h2 className='ml-4 text-bold text-lg'>Cargo : {cargo}</h2>
            </div>
            <p>Id trabajo: {idtrabajo}</p>
            <p>Empresa: {empresa}</p>
            <p>Salario: $ {salario} </p>
            <p>Id de persona: {idpersona}</p>
            <button onClick={handleDeleteClick} className='mr-5 mt-2'>
                <FontAwesomeIcon icon={faTrash} color="red" size="lg" />
            </button>
            {isConfirmModalOpen && <ConfirmModal onClose={handleCloseConfirmModal} id={idtrabajo} />}
        </div>
    )
}

export default Card;