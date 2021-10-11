import express from 'express'
import { getAllRequests, addRequest, getOneSandwich } from '../controllers/schedule.js'
const router = express.Router()

router.route('/schedule')
  .get(getAllRequests)
  .post(addRequest)

router.route('/schedule/:id')
  .get(getOneSandwich)
  
  

export default router