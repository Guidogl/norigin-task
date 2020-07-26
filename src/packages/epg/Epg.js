import React from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import Dateline from '../dateline/Dateline'

import Channels from '../channels/Channels'

import './Epg.css'

export default function Epg() {
  const [data, setData] = React.useState([])
  //   const [start, setStart] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      await axios('http://localhost:1337/epg').then((response) =>
        setData(response.data)
      )
    }

    // const serializeStart = (data) => {
    //   const showStart = data.map((schedule) =>
    //     schedule.schedules.map((show) =>
    //       setStart((oldArray) => [...oldArray, show.start])
    //     )
    //   )
    //   return showStart
    // }

    fetchData()
    // serializeStart(data)
  }, [])

  return (
    <div className='epg-container'>
      <div className='epg-dateline-icon'>
        <FontAwesomeIcon icon={faStar} color='grey' size='lg' />
      </div>
      <Dateline />
      {/* <Timeline /> */}
      <Channels channels={data} />
    </div>
  )
}
