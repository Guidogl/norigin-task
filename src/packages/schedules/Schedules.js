import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Schedules() {
  const [data, setData] = useState([])
  const [id, setId] = useState('')

  useEffect(() => {
    async function fetchData() {
      await axios('http://localhost:1337/epg').then((response) =>
        setData(response.data)
      )
    }

    fetchData()
  }, [])

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <a>{item.title}</a>
          <img src={item.images.LOGO} />
        </li>
      ))}
    </ul>
  )
}
