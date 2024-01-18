export const postDataFetch = async (url : string, obj : object) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  }

  try {
    const data = await fetch(url, options)
    const result = await data.json()
    return result
  } catch (error) {
    return {}
  }
}
