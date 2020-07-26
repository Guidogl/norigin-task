export default (date) => {
  const start = new Date(date)
  start.setHours(0, 0, 0, 0)
  return start.getTime()
}
