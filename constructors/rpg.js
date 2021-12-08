const inquirer = require('inquirer')

const character = (name, race, gender, hairColor, bodyType) => ({
  name, race, gender, hairColor, bodyType,
  level: 1
})

const wizard = (name, race, gender, hairColor, bodyType, skills) => ({
  ...character(name, race, gender, hairColor, bodyType)

})

const rogue = (name, race, gender, hairColor, bodyType, skills) => ({
  ...character(name, race, gender, hairColor, bodyType)
})

const paladin = (name, race, gender, hairColor, bodyType, skills) => ({
  ...character(name, race, gender, hairColor, bodyType)
})

const charName = () => {
  inquirer.prompt({
    type: 'input',
    name: 'charName',
    message: 'Enter your name:'
  })
  .then(data => {
    inquirer.prompt({
      type: 'list',
      name: 'race',
      message: 'Choose your class:',
      choices: ['Wizard', 'Rogue', 'Paladin']
    })
    .then(choice => {
      console.log(data)
      console.log(choice)
    })
  })
}

// const other = () => {
//   inquirer.prompt({
//     type: 'list',
//     name: 'race',
//     message: 'Choose your race:',
//     choices: ['Wizard', 'Rogue', 'Paladin']
//   })
//   .then(choice => {
//     console.log(choice)
//   })
// }

charName()

// other()

// console.log(data)



// const cleric = (name, race, gender, hairColor, bodyType, skills) => ({
//   ...character(name, race, gender, hairColor, bodyType)
// })

// const useless = (name, race, gender, hairColor, bodyType, skills) => ({
//   ...character(name, race, gender, hairColor, bodyType)
// })