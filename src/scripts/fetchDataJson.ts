export const fetchDataJson = async (url : string) => {
  try {
    const data = await fetch(url)
    const json = await data.json()

    return json
  } catch (error) {
    return {}
  }
}
