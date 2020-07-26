export default () => {
  var date = new Date()
  date.setDate(date.getDate() - 14)
  date.setHours(0, 0, 0, 0)

  return new Date(date).valueOf()
}
