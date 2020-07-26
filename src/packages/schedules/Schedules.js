import React from 'react'

import Header from '../header/Header'
import Epg from '../epg/Epg'

export default function Schedules() {
  const [show, setShow] = React.useState(true)

  return (
    <div className='schedules-container'>
      <Header />
      <Epg load={show} />
      {show && <button onClick={() => setShow(false)}>Show Epg</button>}
    </div>
  )
}
