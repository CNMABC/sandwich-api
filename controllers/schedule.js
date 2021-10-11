import SandwichOrder from '../models/sandwichOrder.js'

// Index route 
export const getAllRequests = async (_req, res) => {
  const Schedule = await SandwichOrder.find()
  console.log('Schedule', Schedule)
  return res.status(200).json(Schedule)
})


// Create route - add a new sandwich request 
app.post('/schedule', async (req, res) => {
  try {
    const sandwichToAdd = await SandwichOrder.create(req.body)
    console.log('SANDWICH TO ADD', sandwichToAdd)
    return res.status(201).json(sandwichToAdd)
  } catch (err) {
    console.log(err)
    return res.status(422).json(err)
  }
})


// Sandwich route - get one request 

app.get('/schedule/:id', async (req, res) => {
  try {
    const { id } = req.params
    const singleSandwich = await SandwichOrder.findById(id)
    if (!singleSandwich) throw new Error()
    return res.status(200).json(singleSandwich)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ 'message': 'not found' })
  }
})