import express from 'express'
import morgan from 'morgan'
import cors from 'cors'


import userDataRoute from '../app/routes/userDataRoute.js'

// rest object
const app = express()

// middelwares
// app.use(cors());
app.use(cors({}))
app.use(express.json())
// app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))


// rest api

app.use('/api/userData', userDataRoute)

app.get('/', (req, res) => {
    res.send('<h1>Welcome to app</h1>')
})

export default app
