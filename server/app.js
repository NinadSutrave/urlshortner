import express from 'express'
import connect from './connection.js'
import apis from './routes/function.js'

const app = express()
const PORT = process.env.PORT || 5000

//connect to database
connect()

app.use('/', apis)

app.listen(PORT, () => {
    console.log("Server is up on Port 5000")
})