import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCity, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

function Card({ id, nombre, area, presupuesto, altitud }) {
    return (
        <div className="card bg-color-1 rounded-xl p-4 shadow-lg font-lato h-fit" key={id}>
            <div className="flex items-center">
                <FontAwesomeIcon icon={faCity} size="xl" />
                <h2 className='ml-4 text-bold text-lg'>{nombre}</h2>
            </div>
            <p>Alcalde: falta--</p>
            <p>Área: {area}</p>
            <p>Presupuesto: {presupuesto}</p>
            <p>Altitud: {altitud}</p>
            <button onClick={() => console.log('Editar', id)} className='mr-5 mt-2'>
                <FontAwesomeIcon icon={faEdit} size="lg" />
            </button>
            <button onClick={() => console.log('Eliminar', id)}>
                <FontAwesomeIcon icon={faTrash} color="red" size="lg" />
            </button>
        </div>
    )
}

export default Card;