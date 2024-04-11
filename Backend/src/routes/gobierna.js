const db = require('../db')
const { Router } = require('express')

const router = Router()

// CRUD gobierna ////////////////////////////////////

// CREATE 
router.post("/gobierna", async (req, res) => {
    try {
        const { id_persona, id_municipio } = req.body;
        const gobiernaTemp = await db.query(
            "INSERT INTO gobierna (id_persona, id_municipio) VALUES($1, $2) RETURNING *",
            [id_persona, id_municipio]
        );

        res.json(gobiernaTemp.rows[0]);
    } catch (err) {
        res.json(err.message);
        console.error(err.message);
    }
});

// READ 
router.get("/gobierna", async (req, res) => {
    try {
        const allubicacion = await db.query("SELECT * FROM gobierna");
        res.json(allubicacion.rows);
    } catch (err) {
        res.json(err.message);
        console.error(err.message);
    }
});

// READ todas las viviendas de un gobierna o todas los gobiernas de una vivienda
router.get("/gobierna/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const ubicacion = await db.query("SELECT * FROM gobierna WHERE id_municipio = $1", [id]);
        res.json(ubicacion.rows);
    } catch (err) {
        res.json(err.message);
        console.error(err.message);
    }
});

router.get("/gobiernap/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const ubicacion = await db.query("SELECT * FROM gobierna WHERE id_persona = $1", [id]);
        res.json(ubicacion.rows);
    } catch (err) {
        res.json(err.message);
        console.error(err.message);
    }
});


// READ municipio especifica con gobierna especifico
router.get("/gobierna-municipio/", async (req, res) => {
    try {
        const { id_persona, id_municipio } = req.body;

        const ubicacion = await db.query("SELECT * FROM gobierna WHERE id_persona = $1 AND id_municipio = $2",
            [id_persona, id_municipio]);

        res.json(ubicacion.rows[0]);


    } catch (err) {
        res.json(err.message);
        console.error(err.message);
    }
});

// UPDATE municipio especifica con gobierna especifico
router.put("/gobierna-municipio/", async (req, res) => {
    try {
        const { id_personaNuevo, id_municipioNuevo, id_persona, id_municipio } = req.body;
        const ubicacion = await db.query(
            "UPDATE gobierna SET id_persona = $1, id_municipio = $2 WHERE id_persona = $3 AND id_municipio = $4",
            [id_personaNuevo, id_municipioNuevo, id_persona, id_municipio]
        );

        res.json("datos de gobierna actualizados");
    } catch (err) {
        res.json(err.message);
        console.error(err.message);
    }
});

// DELETE municipio especifica con gobierna especifico
router.delete("/gobierna-municipio/", async (req, res) => {
    try {
        const { id_persona, id_municipio } = req.body;
        const ubicacion = await db.query("DELETE FROM gobierna WHERE id_persona = $1 AND id_municipio = $2",
            [id_persona, id_municipio]
        );

        res.json("datos de gobierna eliminados");
    } catch (err) {
        res.json(err.message);
        console.log(err.message);
    }
});

module.exports = router