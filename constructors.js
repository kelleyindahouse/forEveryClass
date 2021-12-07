function Potions(name, username, email) {
  this.name = name
  this.username = username
  this.email = email
}

const user1 = new User('John Doe', 'johndoe', 'johndoe@gmail.com')
const user2 = new User('Jane Doe', 'janedoe', 'janedoe@gmail.com')

console.log(user1)
console.log(user2)