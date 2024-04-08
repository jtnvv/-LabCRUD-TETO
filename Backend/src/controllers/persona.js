const db = require('../db')

exports.getUsers2 = async (req, res) => {
    console.log("susers")
    try {
      const { rows } = await db.query('select user_id, email from users')
  
      return res.status(200).json({
        success: true,
        users: rows,
      })
    } catch (error) {
      console.log(error.message)
    }
  }