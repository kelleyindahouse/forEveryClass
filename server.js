const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send(`
  <h1>Favorite:</h1>
  <ul>/movies</ul>
  <ul>/foods</ul>
  <ul>/games</ul>
  <ul>/codes</ul>
  `)
})

app.get('/movies', (req, res) => {
  res.send(`
  <h1>Favorite Movies:</h1>
  <ul>Deadpool</ul>
  <ul>Game Night</ul>
  <ul>Talladega Nights</ul>
  <ul>Army of Thieves</ul>
  `)
})

app.get('/foods', (req, res) => {
  res.send(`
  <h1>Favorite Foods:</h1>
  <ul>Thai</ul>
  <ul>Korean</ul>
  <ul>Vietnamese</ul>
  <ul>Japanese</ul>
  <ul>Mediterranean</ul>
  `)
})

app.get('/games', (req, res) => {
  res.send(`
  <h1>Favorite Games:</h1>
  <ul>/movies</ul>
  <ul>/foods</ul>
  <ul>/games</ul>
  <ul>/codes</ul>
  `)
})

app.get('/codes', (req, res) => {
  res.send(`
  <h1>Favorite Codes:</h1>
  <ul>/movies</ul>
  <ul>/foods</ul>
  <ul>/games</ul>
  <ul>/codes</ul>
  `)
})

app.listen(3000)
