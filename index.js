import express from 'express'
import mongoose from 'mongoose'
import SandwichOrder from './models/SandwichOrder.js'
import { dbURI, port } from './config/environment.js'
import router from './router.js'

const app = express()
const port = 4000
const dbURI = 'mongodb://localhost/sandwich-api'

app.use(express.json())// convert incoming JSON into JS and store on the req.body so we can access the data 

// middleware for router
app.use(router)

// delete a sandwich - remove a sandwich 
app.delete('/schedule/:id', async (req,res) => {
  try {
    const { id } = req.params
    // find the sandwich required
    const sandwichToDelete = await SandwichOrder.findById(id)
    if (!sandwichToDelete) throw new Error()
    await sandwichToDelete.remove()
    return res.sendStatus(204)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ 'message': 'not found' })
  }
})


// Logger -> to console log the incoming request method and the request url
app.use((req, _res, next) => {
  console.log(`🚨 Incoming request: METHOD: ${req.method}, URL: ${req.url}`)
  next()
})

const startServer = async () => {
  try {
    // * connect to db
    await mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    console.log('🚀 Database has connected successfully')
    // * establish server connection
    app.listen(port, () => console.log(`🚀 Express is up and running on port ${port}`))
  } catch (err) {
    console.log('🆘 Something has gone wrong')
    console.log(err)
  }
}

startServer()


app.listen(port, () => console.log(`Express is up and running on port ${port}`))