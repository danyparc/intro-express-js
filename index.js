// Inicializamos express
const express = require('express')
const app = express()

// Middlewares para trabajar con JSON
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Primera ruta, Hola mundo express
app.get('/', (req, res) => {
  res.send('Hello world!')
})

// recuerda versionar tu API 😉
app.get('/api/v1', (req, res) => {
  res.send(`
    <h1>Hola!</h1>
    <h3>Aquí va a estar mi API, pronto</h3>
  `)
})

// Enviando un objeto
app.get('/api/v1/saludo', (req, res) => {
  const miSaludo = {
    id: 1,
    name: 'Dany',
    message: 'Hola, soy Dany, sensei de la G10'
  }

  res.send(miSaludo)
})

// Nueva ruta con parameters (PARAMS)
app.get('/api/v1/pokemons/:pokeid', (req, res) => {
  console.log(req.params)
  //  api/v1/temporadas/2/pokemons/5
  // {numero:2, id: 5}
  res.send(`<h3> Pediste el pokemon: ${req.params.pokeid} </h3>`)
})

// Nueva ruta con Query Params
app.get('/api/v1/pokemons', (req, res) => {
  console.log(req.query)
  //...supongamos que aquí buscamos al pokemon que
  res.send(`<h3>El pokemon que estas buscando es ${req.query.search} de la fecha ${req.query.date}</h3>`)
})

// Nuestra primer ruta con método POST
app.post('/api/v1/students', (req, res) => {
  // Los middlewares (Línea 5) sirven para recibir el objeto JSON en req.body
  console.log('BODY:', req.body)
  const newStudent = req.body 
  //... Aquí se haría el registro en la DB
  res.status(201).send(`El estudiante ${newStudent.name} ha sido creado!`)
})

// Lanzamos el server
app.listen(8000, () => {
  console.log('listening on http://localhost:8000')
})