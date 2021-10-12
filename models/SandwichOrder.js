import mongoose from 'mongoose' 

//definition of the schema
const scheduleSchema = new mongoose.Schema({
  task: { type: String, required: true, maxlength: 20 },
  recipient: { type: String, required: true, maxlength: 20 },
  timeForTask: { type: Number, required: true }
}, {
  timestamps: true
})

// Defining the model 
export default mongoose.model('SandwichOrder', scheduleSchema)