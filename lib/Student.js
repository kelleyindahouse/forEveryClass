const Character = require('./Character.js')

class Student extends Character {
  constructor(name, gender, race, hp, xpRate, wisdom) {
    super(name, gender, race, hp)
    this.xpRate = xpRate
    this.wisdom = wisdom
  }
}

module.exports = Student