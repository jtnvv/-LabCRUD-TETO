const db = require('../db')
const { Router } = require('express')

const router = Router()

// CRUD dependiente ////////////////////////////////////

// CREATE 
router.post("/dependiente", async (req, res) => {
    try {
        const { id_dependiente, id_cabeza_familia } = req.body;

        if(id_dependiente === id_cabeza_familia){
            const dependienteTemp = await db.query(
                "INSERT INTO dependiente (id_dependiente, id_cabeza_familia) VALUES($1, $2) RETURNING *",
                [id_dependiente, id_cabeza_familia]
            );
            res.json(dependienteTemp.rows[0]);
        }
        else{
            const dependencia = await db.query("SELECT * FROM dependiente WHERE id_dependiente = $1 AND id_cabeza_familia = $2",
            [id_cabeza_familia, id_cabeza_familia]);
            if(dependencia.rows[0]){
                const dependienteTemp = await db.query(
                    "INSERT INTO dependiente (id_dependiente, id_cabeza_familia) VALUES($1, $2) RETURNING *",
                    [id_dependiente, id_cabeza_familia]
                );
                res.json(dependienteTemp.rows[0]);
            }
            else{
                res.json("el cabeza de familia introducido no esta registrado como cabeza (no se apunta a si mismo)");
            }
            
        }       

    } catch (err) {
        res.json(err.message);
        console.error(err.message);
    }
});

// READ 
router.get("/dependiente", async (req, res) => {
    try {
        const allPropiedad = await db.query("SELECT * FROM dependiente");
        res.json(allPropiedad.rows);
    } catch (err) {
        res.json(err.message);
        console.error(err.message);
    }
});

// READ todas las viviendas de un dependiente o todas los dependientes de una vivienda
router.get("/dependiente/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { es_id_de_dependiente } = req.body;
        if (es_id_de_dependiente) {
            const dependenciaTemp = await db.query("SELECT * FROM dependiente WHERE id_dependiente = $1", [id]);
            res.json(dependenciaTemp.rows);
        }
        else {
            const dependenciaTemp = await db.query("SELECT * FROM dependiente WHERE id_cabeza_familia = $1", [id]);
            res.json(dependenciaTemp.rows);
        }

    } catch (err) {
        res.json(err.message);
        console.error(err.message);
    }
});

// READ cabeza especifica con dependiente especifico
router.get("/dependiente-cabeza/", async (req, res) => {
    try {
        const { id_dependiente, id_cabeza_familia } = req.body;

        const dependencia = await db.query("SELECT * FROM dependiente WHERE id_dependiente = $1 AND id_cabeza_familia = $2",
        [id_dependiente, id_cabeza_familia]);

        res.json(dependencia.rows[0]);


    } catch (err) {
        res.json(err.message);
        console.error(err.message);
    }
});

// UPDATE cabeza especifica con dependiente especifico
router.put("/dependiente-cabeza/", async (req, res) => {
    try {
        const { id_dependienteNuevo, id_cabeza_familiaNuevo, id_dependiente, id_cabeza_familia } = req.body;
        const dependencia = await db.query(
            "UPDATE dependiente SET id_dependiente = $1, id_cabeza_familia = $2 WHERE id_dependiente = $3 AND id_cabeza_familia = $4",
            [id_dependienteNuevo, id_cabeza_familiaNuevo, id_dependiente, id_cabeza_familia]
        );

        res.json("datos de dependiente actualizados");
    } catch (err) {
        res.json(err.message);
        console.error(err.message);
    }
});

// DELETE cabeza especifica con dependiente especifico
router.delete("/dependiente-cabeza/", async (req, res) => {
    try {
        const { id_dependiente, id_cabeza_familia } = req.body;
            const dependencia = await db.query("DELETE FROM dependiente WHERE id_dependiente = $1 AND id_cabeza_familia = $2",
                [id_dependiente, id_cabeza_familia]
            );
        
        res.json("datos de dependiente eliminados");
    } catch (err) {
        res.json(err.message);
        console.log(err.message);
    }
});

module.exports = router