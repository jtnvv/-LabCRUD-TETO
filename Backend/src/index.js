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
app.use(cors({ origin: CLIENT_URL, credentials: true }))
app.use(passport.initialize())

//import routes
const authRoutes = require('./routes/auth')
const personaRoutes = require('./routes/persona')
const viviendaRoutes = require('./routes/vivienda')
const municipioRoutes = require('./routes/municipio')
const propietarioRoutes = require('./routes/propietario')
const resideRoutes = require('./routes/reside')
const dependienteRoutes = require('./routes/dependiente')

//initialize routes
app.use('/api', authRoutes)
app.use(personaRoutes)
app.use(viviendaRoutes)
app.use(municipioRoutes)
app.use(propietarioRoutes)
app.use(resideRoutes)
app.use(dependienteRoutes)


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
