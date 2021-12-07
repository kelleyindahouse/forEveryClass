const axios = require('axios')
const inquirer = require('inquirer')

inquirer.prompt({
  type: 'input',
  name: 'pokemonName',
  message: 'Enter the name of a Pokemon:'
})
  .then(data => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${data.pokemonName}`)
      .then(res => {
        console.log(res.data)
        console.log(res.data.types)
        pokeData = res.data
        console.log(`Pokemon: ${pokeData.name}`)
        console.log(`Height: ${pokeData.height} m`)
        console.log(`Weight: ${pokeData.weight} kg`)
        console.log(`Type: ${pokeData.types}`)
      })
      .catch(err => console.log(err))
  })
  .catch(err => console.log(err))