const db = require('../db')
const { Router } = require('express')

const router = Router()

// CRUD reside ////////////////////////////////////

// CREATE 
router.post("/reside", async (req, res) => {
    try {
        const { id_persona, id_vivienda } = req.body;
        const resideTemp = await db.query(
            "INSERT INTO reside (id_persona, id_vivienda) VALUES($1, $2) RETURNING *",
            [id_persona, id_vivienda]
        );

        res.json(resideTemp.rows[0]);
    } catch (err) {
        res.json(err.message);
        console.error(err.message);
    }
});

// READ 
router.get("/reside", async (req, res) => {
    try {
        const allresidencia = await db.query("SELECT * FROM reside");
        res.json(allresidencia.rows);
    } catch (err) {
        res.json(err.message);
        console.error(err.message);
    }
});

// READ todas las viviendas de un reside o todas los resides de una vivienda
router.get("/reside/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { es_id_de_persona } = req.body;
        if (es_id_de_persona) {
            const residencia = await db.query("SELECT * FROM reside WHERE id_persona = $1", [id]);
            res.json(residencia.rows);
        }
        else {
            const residencia = await db.query("SELECT * FROM reside WHERE id_vivienda = $1", [id]);
            res.json(residencia.rows);
        }

    } catch (err) {
        res.json(err.message);
        console.error(err.message);
    }
});

// READ residencia especifica con reside especifico
router.get("/reside-residencia/", async (req, res) => {
    try {
        const { id_persona, id_vivienda } = req.body;

        const residencia = await db.query("SELECT * FROM reside WHERE id_persona = $1 AND id_vivienda = $2",
        [id_persona, id_vivienda]);

        res.json(residencia.rows[0]);


    } catch (err) {
        res.json(err.message);
        console.error(err.message);
    }
});

// UPDATE residencia especifica con reside especifico
router.put("/reside-residencia/", async (req, res) => {
    try {
        const { id_personaNuevo, id_viviendaNuevo, id_persona, id_vivienda } = req.body;
        const updateTodo = await db.query(
            "UPDATE reside SET id_persona = $1, id_vivienda = $2 WHERE id_persona = $3 AND id_vivienda = $4",
            [id_personaNuevo, id_viviendaNuevo, id_persona, id_vivienda]
        );

        res.json("datos de reside actualizados");
    } catch (err) {
        res.json(err.message);
        console.error(err.message);
    }
});

// DELETE residencia especifica con reside especifico
router.delete("/reside-residencia/", async (req, res) => {
    try {
        const { id_persona, id_vivienda } = req.body;
            const deleteresidencia = await db.query("DELETE FROM reside WHERE id_persona = $1 AND id_vivienda = $2",
                [id_persona, id_vivienda]
            );
        
        res.json("datos de reside eliminados");
    } catch (err) {
        res.json(err.message);
        console.log(err.message);
    }
});

module.exports = router