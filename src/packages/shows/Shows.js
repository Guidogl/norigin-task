// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core'
// import React from 'react'

import './Shows.css'

export default function Shows({ shows }) {
  //   const showStart = (data) => {
  //     for (let a = 0; a < data.length; a++) {
  //       let eachShow = data[a].schedules
  //       for (let b = 0; b < eachShow.length; b++) {
  //         let eachStart = eachShow[b].start
  //         return eachStart
  //         // console.log(eachShow[b].start)
  //       }
  //     }
  //   }

  //   React.useEffect(() => {}, [])

  //   const NEW = showStart(shows)

  //   console.log(NEW)

  const extractMinute = (stamp) => {
    const date = new Date(stamp)
    const h = date.getHours()
    const m = date.getMinutes()
    const math = h * 60 + m
    return math
  }

  const positions = (props) => css`
    grid-column-start: ${props.beggining};
    grid-column-end: ${props.ending};
  `

  const Table = styled.div`
    ${positions};
  `

  return (
    <div className='shows-container'>
      {shows.map((channels) => (
        <div className='shows-parent' key={channels.id}>
          {channels.schedules.map((item) => (
            <Table
              key={item.id}
              beggining={extractMinute(item.start)}
              ending={extractMinute(item.end)}
            >
              {item.title}
            </Table>
          ))}
        </div>
      ))}
    </div>
  )
}
