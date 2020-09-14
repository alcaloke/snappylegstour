const londonVillages = [
  'Convent Garden',
  'City of London',
  'Hampstead',
  'Brixton',
  'Clerkenwell',
  'Soho',
  'Shoreditch',
  'South Kensington',
  'Knightsbridge',
]

const flashTarget = document.getElementById('flash')

const x = 8

const interval = (ms) => {
  return new Promise((r) => setTimeout(r, ms))
}

const colours = [
  'indianred',
  'lawngreen',
  'lightsalmon',
  'mediumorchid',
  'mediumturquoise',
  'chocolate',
  'cornflowerblue',
  'darkblue',
]

async function run() {
  for (let i = 0; i < 1000000; i++) {
    const randNum = Math.floor(Math.random() * x)
    flashTarget.style.color = colours[randNum]
    flashTarget.innerText = londonVillages[randNum]
    await interval(450)
  }
}

run()
