import mongoose from 'mongoose' 

//definition of the schema
const scheduleSchema = new mongoose.Schema({
  sequenceNumber: { type: Number, required: true, unique: true },
  task: { type: String, required: true, maxlength: 20 },
  recipient: { type: String, required: true, maxlength: 20 }
}, {
  timestamps: true,
})

// Defining the model 
export default mongoose.model('SandwichOrder', scheduleSchema)