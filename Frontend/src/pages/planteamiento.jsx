import Layout from "../components/layout/layout"
export default function Planteamiento() {
    return (
        <div className="bg-color-1">
            <Layout>
                <div className="w-1/2 mx-auto flex flex-col items-center justify-center text-lato">
                    <h1 className="text-5xl m-5">Contexto</h1>
                    <p>Supongamos el siguiente universo del discurso sobre municipios, viviendas y personas. Cada persona sólo puede habitar en
                        una vivienda y ser residente en un municipio, pero puede ser propietaria de varias viviendas. Nos interesa también conocer las
                        personas que dependen del cabeza de familia (C.F.). Se indicaran los supuestos semánticos que se consideran oportunos para justificar
                        todas las decisiones de diseño.</p>
                    <img src="https://raw.githubusercontent.com/jtnvv/LabCRUD-TETO/main/Frontend/src/assets/extra/planteamiento.jpeg" alt="Planteamiento" className="w-2/3 rounded-xl" />
                </div>
            </Layout>
        </div>
    )
}