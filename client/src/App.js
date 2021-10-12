import React, { useEffect, useState } from 'react'
import axios from 'axios'


const App = () => {
  const [schedule, setSchedule] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/schedule')
      setSchedule(data)
    }
    getData()
  })

  return (
    <h1>Sandwich Schedule</h1>
  )
}

export default App
