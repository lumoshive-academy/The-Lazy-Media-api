import express from 'express'
import cors from 'cors'

import router from './router'
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.use('/api', router)

app.get('/', (req, res) => {
  res.send({
    message: 'Hallo 👋',
    status: 'On Progress 🚀',
  })
})

app.get('*', (req, res) => {
  res.send({
    message: 'endpoint not found',
  })
})

app.listen(port, () => {
  console.log(`Running away on ${port}`)
})
