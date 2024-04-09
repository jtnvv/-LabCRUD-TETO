import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

function Card({ id, nombre, documento, celular, edad, sexo }) {
    return (
        <div className="card bg-color-1 rounded-xl p-4 shadow-lg font-lato h-fit" key={id}>
            <div className="flex items-center">
                <FontAwesomeIcon icon={faUser} size="xl" />
                <h2 className='ml-4 text-bold text-lg'>{nombre}</h2>
            </div>
            <p>Documento: {documento}</p>
            <p>Celular: {celular}</p>
            <p>Edad: {edad}</p>
            <p>Sexo: {sexo}</p>
            <button onClick={() => console.log('Editar', id)} className='mr-5 mt-2'>
                <FontAwesomeIcon icon={faEdit} size="lg" />
            </button>
            <button onClick={() => console.log('Eliminar', id)} className='mr-5 mt-2'>
                <FontAwesomeIcon icon={faTrash} color="red" size="lg" />
            </button>
            <button onClick={() => console.log('ver Dependientes', id)} className="border-2 border-color-4 pl-1 pr-1 rounded-xl">Dependientes</button>
        </div>
    )
}

export default Card;