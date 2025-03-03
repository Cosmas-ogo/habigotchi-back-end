import express from 'express'
import apiRouter from './router/api-router'
import cors from 'cors'

const app = express()


app.use(express.json())
app.use(cors())

app.use('/api', apiRouter)


export default app