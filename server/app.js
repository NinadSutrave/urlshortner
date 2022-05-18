import express from 'express'
import connect from './connection.js'
import apis from './routes/function.js'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 5000

//connect to database
connect()

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use('/', apis)

app.listen(PORT, () => {
    console.log("Server is up on Port 5000")
})