import React from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import Dateline from '../dateline/Dateline'

import './Epg.css'

export default function Epg({ load }) {
  const [data, setData] = React.useState([])
  const [start, setStart] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      await axios('http://localhost:1337/epg').then((response) =>
        setData(response.data)
      )
    }

    const serializeStart = (data) => {
      const showStart = data.map((schedule) =>
        schedule.schedules.map((show) =>
          setStart((oldArray) => [...oldArray, show.start])
        )
      )
      return showStart
    }

    fetchData()
    serializeStart(data)
  }, [load])

  return (
    <div className='epg-container'>
      <FontAwesomeIcon
        className='epg-dateline-icon'
        icon={faStar}
        color='grey'
        size='lg'
      />
      <Dateline startDates={start} />
      {/* <Timeline /> */}
      {/* <Shows /> */}
    </div>
  )
}
