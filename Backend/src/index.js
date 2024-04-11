const express = require('express')
const app = express()
const { PORT, CLIENT_URL } = require('./constants')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const cors = require('cors')

const db = require('./db')

//import passport middleware
require('./middlewares/passport-middleware')

//initialize middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(passport.initialize())

//import routes
const authRoutes = require('./routes/auth')
const personaRoutes = require('./routes/persona')
const viviendaRoutes = require('./routes/vivienda')
const municipioRoutes = require('./routes/municipio')
const propietarioRoutes = require('./routes/propietario')
const resideRoutes = require('./routes/reside')
const dependienteRoutes = require('./routes/dependiente')
const ubicadaEnRoutes = require('./routes/ubicada-en')
const gobiernaRoutes = require('./routes/gobierna')
const trabajoRoutes = require('./routes/trabajo')

//initialize routes
app.use('/api', authRoutes)
app.use(personaRoutes)
app.use(viviendaRoutes)
app.use(municipioRoutes)
app.use(propietarioRoutes)
app.use(resideRoutes)
app.use(dependienteRoutes)
app.use(ubicadaEnRoutes)
app.use(gobiernaRoutes)
app.use(trabajoRoutes)

app.get("/",  async (req, res) => {
  try {
    res.json("TETICO");
  } catch (err) {
    res.json("NOT TETICO");
  }
});

//app start
const appStart = () => {
  try {
    app.listen(PORT, () => {
      console.log(`The app is running at http://localhost:${PORT}`)
    })
  } catch (error) {
    console.log(`Error: ${error.message}`)
  }
}

appStart()
