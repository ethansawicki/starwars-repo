import {fetchHoth, fetchLuke, fetchPlanets, fetchShips, fetchTitles} from "./starWarsData.js"

const displayLuke = async () => {
  const data = await fetchLuke()
  renderLukeToDOM(data)
}

const displayShips = async () => {
  const data = await fetchShips()
  renderShipToDOM(data)
}

const displayHoth = async () => {
  const data = await fetchHoth()
  renderHothToDOM(data)
}

const displayFilms = async () => {
  const data = await fetchTitles()
  renderTitlesToDOM(data)
}

const displayPlanets = async () => {
  const data = await fetchPlanets()
  renderDiameterToDOM(data)
}

const renderLukeToDOM = (data) => {
  let html = `
    <article>
      <section class="card">
        <p>Name: ${data.name}</p>
        <p>height: ${data.height}</p>
      </section>
    </article>
  `
  document.querySelector('.luke').innerHTML = html
}

const renderShipToDOM = (data) => {
  let html = `
    <article>
      <section class="card">
        <p>Ship Count: ${data.results.length}</p>
      </section>
    </article>
  `
  document.querySelector('.ships').innerHTML = html
}

const renderHothToDOM = (data) => {
  let html = `
    <article>
      <section class="card">
        <p>Hoth Name: ${data.name}</p>
        <p>Hoth Rotation Period: ${data.rotation_period}</p>
        <p>Hoth Orbital Period: ${data.orbital_period}</p>
        <p>Hoth Diameter: ${data.diameter}</p>
        <p>Hoth Climate: ${data.climate}</p>
        <p>Hoth Gravity: ${data.gravity}</p>
        <p>Hoth Terrain: ${data.terrain}</p>
        <p>Hoth Surface: ${data.surface_water}</p>
        <p>Hoth Population: ${data.population}</p>
      </section>
    </article>
  `
  document.querySelector('.hoth').innerHTML = html
}

const renderTitlesToDOM = (data) => {
  const htmlElement = document.querySelector('.titles')
  let html = ""
  for(const filmData of data.results) { 
   html += `
    <article>
      <section class="card">
        <p>Film Date: ${filmData.release_date}</p>
        <p>Film Titles: ${filmData.title}</p>
      </section>
    </article>`
  }
  htmlElement.innerHTML = html
  return htmlElement
}

const renderDiameterToDOM = (data) => {
  const htmlElement = document.querySelector('.planets')
  const dataResults = data.results
  dataResults.sort((a, b) => parseInt(a.diameter) < parseInt(b.diameter))
  let html = ""
  for(const diameterData of dataResults) {
   html += `
    <article>
      <section class="card">
        <p>Planet Name: ${diameterData.name}</p>
        <p>Diameter: ${diameterData.diameter}</p>
      </section>
    </article>`
  }
  htmlElement.innerHTML = html
  return htmlElement
}

const callAll = async () => {
  await Promise.all([displayLuke(), displayShips(), displayHoth(), displayFilms(), displayPlanets()])
}
const renderAll = () => {
  callAll()
  let html = `<div class="luke"></div>`
  html += `<div class="ships"></div>`
  html += `<div class="hoth"></div>`
  html += `<div class="titles"></div>`
  html += `<div class="planets"></div>`
  document.querySelector('#app').innerHTML = html
}

renderAll()