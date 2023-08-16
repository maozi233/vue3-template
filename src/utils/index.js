export const deepClone = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  const clonedObj = Array.isArray(obj) ? [] : {}

  for (const key in obj) {
    clonedObj[key] = deepClone(obj[key])
  }

  return clonedObj
}
