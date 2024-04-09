import Layout from "../components/layout/layout"
import Card from "../components/card/card-vivienda"
import { useState } from 'react';
import CreateModal from "../components/modal/vivienda/modal-create-vivienda";

export default function Viviendas() {
    const viviendas = Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        direccion: `Dirección ${i + 1}`,
        capacidad: 2 + i,
        niveles: 1 + (i % 3),
    }));

    const [search, setSearch] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredViviendas = viviendas.filter(vivienda =>
        vivienda.direccion.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="bg-color-3">
            <Layout>
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 p-4 font-lato flex flex-col items-center mt-20 m-5 md:ml-10">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="mt-4 p-2 bg-color-1 text-color-4 rounded-xl text-2xl mb-10"
                        >
                            Agregar Vivienda
                        </button>
                        <img src="src/assets/extra/vivienda.png" alt="Viviendas" className="w-80" />
                        <h1 className="text-6xl font-bold text-color-1">VIVIENDAS</h1>
                        <input
                            type="text"
                            placeholder="Buscar por dirección de la vivienda"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="p-2 rounded-2xl w-80 mt-4"
                        />
                    </div>
                    <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 h-full min-h-screen p-20">
                        {filteredViviendas.map((vivienda) => (
                            <Card
                                key={vivienda.id}
                                id={vivienda.id}
                                direccion={vivienda.direccion}
                                capacidad={vivienda.capacidad}
                                niveles={vivienda.niveles}
                            />
                        ))}
                    </div>
                    {isModalOpen && <CreateModal onClose={() => setIsModalOpen(false)} />}
                </div>
            </Layout>
        </div>
    )
}