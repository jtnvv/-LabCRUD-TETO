import { useState } from 'react';

function CreateModal({ onClose }) {
    const [idalcalde, setAlcalde] = useState('');
    const [area, setArea] = useState('');
    const [altitud, setAltitud] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes manejar la lógica de envío del formulario
        console.log({ idalcalde, area, altitud });
        onClose();
    };

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">Agregar Municipio</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="flex flex-col">
                                <label htmlFor="alcalde" className="mb-2">Alcalde</label>
                                <input id="alcalde" type="text" value={idalcalde} onChange={e => setAlcalde(e.target.value)} placeholder="Documento del alcalde" className="p-2 border rounded" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="area" className="mb-2">Area</label>
                                <input id="area" type="number" value={area} onChange={e => setArea(e.target.value)} placeholder="Area en kilometros cuadrados" className="p-2 border rounded" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="altitud" className="mb-2">Altitud</label>
                                <input id="altitud" type="number" value={altitud} onChange={e => setAltitud(e.target.value)} placeholder="Altitud del municipio en metros" className="p-2 border rounded" />
                            </div>
                            <button type="submit" className='mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-color-2 text-base font-medium text-color-1 hover:bg-color-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'>Guardar</button>
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

export default CreateModal;