const API = "https://swapi.dev/api"

// Get Luke Skywalker
export const fetchLuke = async () => {
  const dataFetch = await fetch(`${API}/people/1`)
  const jsonData = await dataFetch.json()
  return jsonData
};

export const fetchShips = async () => {
  const dataFetch = await fetch(`${API}/starships/?page=4`)
  const jsonData = await dataFetch.json()
  return jsonData
};

export const fetchHoth = async () => {
  const dataFetch = await fetch(`${API}/planets/4/`)
  const jsonData = await dataFetch.json()
  return jsonData
}

export const fetchTitles = async () => {
  const dataFetch = await fetch(`${API}/films`)
  const jsonData = await dataFetch.json()
  return jsonData
}

export const fetchPlanets = async () => {
  const dataFetch = await fetch(`${API}/planets`)
  const jsonData = await dataFetch.json()
  return jsonData
}