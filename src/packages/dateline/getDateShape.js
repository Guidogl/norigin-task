const abrvMonths = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12'
]

const abrvDays = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat']

export default (day) =>
  day instanceof Date
    ? `${abrvDays[day.getDay()]}\
     ${day.getDate().toString()}.${abrvMonths[day.getMonth()]}.`
    : ''
