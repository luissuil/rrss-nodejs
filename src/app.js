import express from 'express'
const app = express()
const port = 80 || process.env.PORT

app.get('/', (req, res) => {
  res.send('<h1>Hola a todos</h1>')
})

app.listen(port)
console.log(`Serever on port ${port}`)
