import React from 'react'

import './Channels.css'

export default function Shows({ channels }) {
  //   const [channels, setChannels] = React.useState([])

  React.useEffect(() => {}, [])

  return (
    <div className='channels-container'>
      {channels.map((item) => (
        <div className='channels-item' key={item.id}>
          {item.title}
        </div>
        // <img
        //   className='show-item'
        //   key={item.id}
        //   src={item.images.LOGO}
        //   alt={item.title}
        // />
      ))}
    </div>
  )
}
