import { useState, useEffect } from 'react';
import { getPropietarioById } from '../../../api/propietario';
import { getPersonaById } from '../../../api/persona';

function PropietariosModal({ onClose, id }) {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const fetchPropietarioData = async () => {
            const propietarios = await getPropietarioById(id);
            if (propietarios) {
                const promises = propietarios.map(async (propietario) => {
                    const persona = await getPersonaById(propietario.id_persona);
                    if (persona) {
                        return {
                            id_persona: persona.data.id_persona,
                            documento: persona.data.documento,
                            nombre: persona.data.nombre,
                            edad: persona.data.edad
                        };
                    }
                });

                const datos = await Promise.all(promises);
                setDatos(datos);
            }
        };

        fetchPropietarioData();
    }, [id]);
    const handleSubmit = (event) => {
        event.preventDefault();

        onClose();
    };

    const handleDelete = (documento) => {
        console.log("eliminado ", documento)
    };

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">Propietarios</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Documento</th>
                                        <th>Nombre</th>
                                        <th>Edad</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {datos.map((dato, index) => (
                                        <tr key={index}>
                                            <td>{dato.id_persona}</td>
                                            <td>{dato.documento}</td>
                                            <td>{dato.nombre}</td>
                                            <td>{dato.edad}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-color-1 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={onClose}>
                                Cerrar
                            </button>
                        </form>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default PropietariosModal;