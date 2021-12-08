const Character = require('./Character.js')

class Alchemist extends Character {
  constructor(name, gender, race, hp, element, resistance) {
    super(name, gender, race, hp)
    this.element = element
    this.resistance = resistance
  }
}

module.exports = Alchemist