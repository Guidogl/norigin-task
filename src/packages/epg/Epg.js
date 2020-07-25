import React from 'react'

import Header from '../header/Header'

import Schedules from '../schedules/Schedules'

export default function Epg() {
  return (
    <div className='epg-container'>
      <Header />
      {/* <Dateline />
      <Timeline /> */}
      <Schedules />
      {/* <Footer /> */}
    </div>
  )
}
