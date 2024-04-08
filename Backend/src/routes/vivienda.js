const db = require('../db')
const { Router } = require('express')

const router = Router()

// CRUD vivienda ////////////////////////////////////

// CREATE 
router.post("/vivienda", async (req, res) => {
    try {
      const { direccion, capacidad, niveles } = req.body;
      const viviendaTemp = await db.query(
        "INSERT INTO vivienda (direccion, capacidad, niveles) VALUES($1, $2, $3) RETURNING *",
        [direccion, capacidad, niveles]
      );
  
      res.json(viviendaTemp.rows[0]);
    } catch (err) {
      res.json(err.message);
      console.error(err.message);
    }
  });
  
  // READ 
  router.get("/vivienda", async (req, res) => {
    try {
      const allTodos = await db.query("SELECT * FROM vivienda");
      res.json(allTodos.rows);
    } catch (err) {
      res.json(err.message);
      console.error(err.message);
    }
  });
  
  // READ INDIVIDUAL
  router.get("/vivienda/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const todo = await db.query("SELECT * FROM vivienda WHERE id_vivienda = $1",
        [id]
      );
  
      res.json(todo.rows[0]);
    } catch (err) {
      res.json(err.message);
      console.error(err.message);
    }
  });
  
  // UPDATE 
  router.put("/vivienda/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { direccion, capacidad, niveles } = req.body;
      const updateTodo = await db.query(
        "UPDATE vivienda SET direccion = $2, capacidad = $3, niveles = $4 WHERE id_vivienda = $1",
        [id, direccion, capacidad, niveles]
      );
  
      res.json("datos de vivienda actualizados");
    } catch (err) {
      res.json(err.message);
      console.error(err.message);
    }
  });
  
  // DELETE
  router.delete("/vivienda/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteTodo = await db.query("DELETE FROM vivienda WHERE id_vivienda = $1",
        [id]
      );
      res.json("datos de vivienda eliminados");
    } catch (err) {
      res.json(err.message);
      console.log(err.message);
    }
  });

  module.exports = router