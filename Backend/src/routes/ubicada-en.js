const db = require('../db')
const { Router } = require('express')

const router = Router()

// CRUD ubicada-en ////////////////////////////////////

// CREATE 
router.post("/ubicada", async (req, res) => {
    try {
        const { id_vivienda, id_municipio } = req.body;
        const ubicadaTemp = await db.query(
            "INSERT INTO ubicada_en (id_vivienda, id_municipio) VALUES($1, $2) RETURNING *",
            [id_vivienda, id_municipio]
        );

        res.json(ubicadaTemp.rows[0]);
    } catch (err) {
        res.json(err.message);
        console.error(err.message);
    }
});

// READ 
router.get("/ubicada", async (req, res) => {
    try {
        const allubicacion = await db.query("SELECT * FROM ubicada_en");
        res.json(allubicacion.rows);
    } catch (err) {
        res.json(err.message);
        console.error(err.message);
    }
});

// READ todas las viviendas de un ubicada o todas los ubicadas de una vivienda
router.get("/ubicada/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const ubicacion = await db.query("SELECT * FROM ubicada_en WHERE id_vivienda = $1", [id]);
        res.json(ubicacion.rows);

    } catch (err) {
        res.json(err.message);
        console.error(err.message);
    }
});

// READ municipio especifica con ubicada especifico
router.get("/ubicada-municipio/", async (req, res) => {
    try {
        const { id_vivienda, id_municipio } = req.body;

        const ubicacion = await db.query("SELECT * FROM ubicada_en WHERE id_vivienda = $1 AND id_municipio = $2",
            [id_vivienda, id_municipio]);

        res.json(ubicacion.rows[0]);


    } catch (err) {
        res.json(err.message);
        console.error(err.message);
    }
});

// UPDATE municipio especifica con ubicada especifico
router.put("/ubicada-municipio/", async (req, res) => {
    try {
        const { id_viviendaNuevo, id_municipioNuevo, id_vivienda, id_municipio } = req.body;
        const ubicacion = await db.query(
            "UPDATE ubicada_en SET id_vivienda = $1, id_municipio = $2 WHERE id_vivienda = $3 AND id_municipio = $4",
            [id_viviendaNuevo, id_municipioNuevo, id_vivienda, id_municipio]
        );

        res.json("datos de ubicada actualizados");
    } catch (err) {
        res.json(err.message);
        console.error(err.message);
    }
});

// DELETE municipio especifica con ubicada especifico
router.delete("/ubicada-municipio/", async (req, res) => {
    try {
        const { id_vivienda, id_municipio } = req.body;
        const ubicacion = await db.query("DELETE FROM ubicada_en WHERE id_vivienda = $1 AND id_municipio = $2",
            [id_vivienda, id_municipio]
        );

        res.json("datos de ubicada eliminados");
    } catch (err) {
        res.json(err.message);
        console.log(err.message);
    }
});

module.exports = router