import getEndOfDay from './getEndOfDay'
import getStartOfDay from './getStartOfDay'
import getFirstDay from './getFirstDay'
import getLastDay from './getLastDay'
import getDateShape from './getDateShape'

export default () => {
  const epgMinDate = getFirstDay()
  const epgMaxDate = getLastDay()
  const date = new Date(epgMinDate)
  const epgDates = []

  do {
    date.setDate(date.getDate() + 1)
    epgDates.push({
      date: getDateShape(date),
      day: new Date(date).getDate(),
      from: Number((getStartOfDay(date) / 1000).toFixed(0)),
      to: Number((getEndOfDay(date) / 1000).toFixed(0))
    })
  } while (date.valueOf() < epgMaxDate.valueOf())

  return {
    epgDates: epgDates
  }
}
