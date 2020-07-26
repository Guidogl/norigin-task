export default (date) => {
  const end = new Date(date)
  end.setHours(23, 59, 59, 999)
  return end.getTime()
}
