import SandwichOrder from '../models/sandwichOrder.js'

// Index route 
export const getAllRequests = async (_req, res) => {
  const schedule = await SandwichOrder.find()
  console.log('Schedule', schedule)
  return res.status(200).json(schedule)
}


// Create route - add a new sandwich request 
export const addRequest = async (req, res) => {
  try {
    const sandwichToAdd = await SandwichOrder.create(req.body)
    console.log('SANDWICH TO ADD', sandwichToAdd)
    return res.status(201).json(sandwichToAdd)
  } catch (err) {
    console.log(err)
    return res.status(422).json(err)
  }
}


// Sandwich route - get one request 

export const getOneSandwich = async (req, res) => {
  try {
    const { id } = req.params
    const singleSandwich = await SandwichOrder.findById(id)
    if (!singleSandwich) throw new Error()
    return res.status(200).json(singleSandwich)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ 'message': 'not found' })
  }
}