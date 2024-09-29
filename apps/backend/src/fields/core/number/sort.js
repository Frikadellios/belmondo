const sort = (a, b, fieldSchema = null) => {
  if (a == null && b == null) return 0
  if (a == null) return 1
  if (b == null) return -1
  const numA = Number.parseFloat(a)
  const numB = Number.parseFloat(b)
  if (Number.isNaN(numA) && Number.isNaN(numB)) return 0
  if (Number.isNaN(numA)) return 1
  if (Number.isNaN(numB)) return -1

  return numA - numB
}

export default sort
