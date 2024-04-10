const db = require('../db')
const { Router } = require('express')

const router = Router()

// CRUD PERSONA ////////////////////////////////////

// CREATE crear uno
router.post("/persona", async (req, res) => {
    try {
      const {  nombre, documento, celular, edad, sexo } = req.body;
      const personita = await db.query(
        "INSERT INTO Persona ( nombre, documento, celular, edad, sexo) VALUES($1, $2, $3, $4, $5) RETURNING *",
        [ nombre, documento, celular, edad, sexo]
      );
  
      res.json(personita.rows[0]);
    } catch (err) {
      res.json(err.message);
      console.error(err);
    }
  });
  
  // READ 
  router.get("/persona", async (req, res) => {
    try {
      const allTodos = await db.query("SELECT * FROM Persona");
      res.json(allTodos.rows);
    } catch (err) {
      res.json(err.message);
      console.error(err.message);
    }
  });
  
  // READ INDIVIDUAL
  router.get("/persona/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const todo = await db.query("SELECT * FROM Persona WHERE id_persona = $1",
        [id]
      );
  
      res.json(todo.rows[0]);
    } catch (err) {
      res.json(err.message);
      console.error(err.message);
    }
  });
  
  // UPDATE 
  router.put("/persona/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { nombre, documento, celular, edad, sexo } = req.body;
      const updateTodo = await db.query(
        "UPDATE Persona SET nombre = $2, documento = $3, celular = $4, edad = $5, sexo = $6 WHERE id_persona = $1",
        [id, nombre, documento, celular, edad, sexo]
      );
  
      res.json("datos de persona actualizados");
    } catch (err) {
      res.json(err.message);
      console.error(err.message);
    }
  });
  
  // DELETE
  router.delete("/persona/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteTodo = await db.query("DELETE FROM Persona WHERE id_persona = $1",
        [id]
      );
      res.json("datos de persona eliminados");
    } catch (err) {
      res.json(err.message);
      console.log(err.message);
    }
  });

  module.exports = router