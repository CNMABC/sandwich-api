import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = 4000
const dbURI = 'mongodb://localhost/sandwich-api'

//definition of the schema
const scheduleSchema = new mongoose.Schema({
  sequenceNumber: { type: Number, required: true, unique: true },
  task: { type: String, required: true, maxlength: 20 },
  recipient: { type: String, required: true, maxlength: 20 }
}, {
  timestamps: true,
})


// Defining the model 
const sandwichOrder = mongoose.model('sandwichOrder', scheduleSchema)

// Logger -> to console log the incoming request method and the request url
app.use((req, _res, next) => {
  console.log(`🚨 Incoming request: METHOD: ${req.method}, URL: ${req.url}`)
  next()
})

// Index route 
app.get('/schedule', async (_req, res) => {
  const schedule = await sandwichOrder.find()
  console.log('schedule', schedule)
  return res.status(200).json(schedule)
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