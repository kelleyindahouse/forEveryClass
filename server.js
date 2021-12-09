const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/games', (req, res) => {
  // res.send('Hello World!')
  res.sendFile(path.join(__dirname, 'public', 'games.html'))
})

app.get('/movies', (req, res) => {
  // res.send('Hello World!')
  res.sendFile(path.join(__dirname, 'public', 'movies.html'))
})

app.get('/foods', (req, res) => {
  // res.send('Hello World!')
  res.sendFile(path.join(__dirname, 'public', 'foods.html'))
})

// let games = {
//   games: [
//     {
//       name: "Fortknife",
//       dev: "Epic"
//     },
//     {
//       name: "Battlefield",
//       dev: "Dice"
//     },
//     {
//       name: "Guild Wars 2",
//       dev: "ArenaNet"
//     }]
// };

// app.get('/games', (req, res) => {
//   res.json(games);
// })

// const dog = {
//   name: 'Beef',
//   age: 2,
//   breed: 'Chihuahua'
// }

// app.get('/dog', (req, res) => {
//   res.json(dog)
// })

// app.get('/', (req, res) => {
//   res.send(`
//   <h1>Favorite:</h1>
//   <ul>/movies</ul>
//   <ul>/foods</ul>
//   <ul>/games</ul>
//   <ul>/codes</ul>
//   `)
// })

// app.get('/movies', (req, res) => {
//   res.send(`
//   <h1>Favorite Movies:</h1>
//   <ul>Deadpool</ul>
//   <ul>Game Night</ul>
//   <ul>Talladega Nights</ul>
//   <ul>Army of Thieves</ul>
//   `)
// })

// app.get('/foods', (req, res) => {
//   res.send(`
//   <h1>Favorite Foods:</h1>
//   <ul>Thai</ul>
//   <ul>Korean</ul>
//   <ul>Vietnamese</ul>
//   <ul>Japanese</ul>
//   <ul>Mediterranean</ul>
//   `)
// })

// app.get('/games', (req, res) => {
//   res.send(`
//   <h1>Favorite Games:</h1>
//   <ul>/movies</ul>
//   <ul>/foods</ul>
//   <ul>/games</ul>
//   <ul>/codes</ul>
//   `)
// })

// app.get('/codes', (req, res) => {
//   res.send(`
//   <h1>Favorite Codes:</h1>
//   <ul>/movies</ul>
//   <ul>/foods</ul>
//   <ul>/games</ul>
//   <ul>/codes</ul>
//   `)
// })

app.listen(3000)
