const db = require('../db')
const { Router } = require('express')

const router = Router()

// CRUD trabajo ////////////////////////////////////

// CREATE 
router.post("/trabajo", async (req, res) => {
    try {
        const { cargo, empresa, salario, id_persona } = req.body;
        const trabajoTemp = await db.query(
            "INSERT INTO trabajo (cargo, empresa, salario, id_persona) VALUES($1, $2, $3, $4) RETURNING *",
            [cargo, empresa, salario, id_persona]
        );

        res.json(trabajoTemp.rows[0]);
    } catch (err) {
        res.json(err.message);
        console.error(err.message);
    }
});

// READ 
router.get("/trabajo", async (req, res) => {
    try {
        const allTodos = await db.query("SELECT * FROM trabajo");
        res.json(allTodos.rows);
    } catch (err) {
        res.json(err.message);
        console.error(err.message);
    }
});

// READ INDIVIDUAL
router.get("/trabajo/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await db.query("SELECT * FROM trabajo WHERE id_trabajo = $1",
            [id]
        );

        res.json(todo.rows[0]);
    } catch (err) {
        res.json(err.message);
        console.error(err.message);
    }
});

// UPDATE 
router.put("/trabajo/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { cargo, empresa, salario, id_persona } = req.body;
        const updateTodo = await db.query(
            "UPDATE trabajo SET cargo = $2, empresa = $3, salario = $4, id_persona = $5 WHERE id_trabajo = $1",
            [id, cargo, empresa, salario, id_persona]
        );

        res.json("datos de trabajo actualizados");
    } catch (err) {
        res.json(err.message);
        console.error(err.message);
    }
});

// DELETE
router.delete("/trabajo/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await db.query("DELETE FROM trabajo WHERE id_trabajo = $1",
            [id]
        );
        res.json("datos de trabajo eliminados");
    } catch (err) {
        res.json(err.message);
        console.log(err.message);
    }
});

module.exports = router