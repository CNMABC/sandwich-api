import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'
import SandwichOrder from '../models/sandwichOrder.js'
import requestData from './data/requests.js'

const seedDatabase = async () => {
  try {
    // * connect to the db
    await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('🚀 DB connected in seeds')

    // * drop the db
    await mongoose.connection.db.dropDatabase()
    console.log('👍 DB dropped')

    // * create requests using requestData
    const schedule = await SandwichOrder.create(requestData)
    console.log(`🌱 DB seeded with ${schedule.length} schedule`)

    // * closing the connection 
    await mongoose.connection.close()
    console.log('✌️ bye')

  } catch (err) {
    console.log(err)
  }
}

seedDatabase()
