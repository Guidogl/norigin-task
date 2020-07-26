import React from 'react'

import './Channels.css'

export default function Shows({ channels }) {
  //   const [channels, setChannels] = React.useState([])

  React.useEffect(() => {}, [])

  return (
    <div className='shows-container'>
      {channels.map((item) => (
        <div className='shows-item' key={item.id}>
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
