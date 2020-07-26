export default () => {
  var date = new Date()
  date.setDate(date.getDate() + 7)
  date.setHours(23, 59, 59, 999)

  return new Date(date).valueOf()
}
