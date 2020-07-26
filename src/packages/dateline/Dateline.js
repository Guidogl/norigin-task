import React from 'react'

import getDateList from './getDateList'

import './Dateline.css'

export default function Dateline({ startDates }) {
  const [dates, setDates] = React.useState([])

  React.useEffect(() => {
    setDates(getDateList().epgDates)
  }, [])

  return (
    <div className='dateline-container'>
      {dates.map((item) => (
        <div className='dateline-item' key={item.date}>
          {item.date}
        </div>
      ))}
    </div>
  )
}
