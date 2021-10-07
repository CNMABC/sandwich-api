import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = 4000
const dbURI = 'mongodb://localhost/sandwich-api'

const startServer = async () => {
  try {
    // * connect to db
    await mongoose.connect(dbURI, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    console.log('🚀 Database has connected successfully')

 // * Logger -> to console log the incoming request method and the request url
app.use((req, _res, next) => {
console.log(`🚨 Incoming request: METHOD: ${req.method}, URL: ${req.url}`)
next()
})

    // * establish server connection
    app.listen(port, () => console.log(`🚀 Express is up and running on port ${port}`))
  } catch (err) {
    console.log('🆘 Something has gone wrong')
    console.log(err)
  }
}

startServer()


app.listen(port,() => console.log(`Express is up and running on port ${port}`))