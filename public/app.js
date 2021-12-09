console.log('ping')

axios.get('/dog')
  .then(res => {
    const dog = res.data

    document.getElementById('dog').innerHTML = `
      <h1>Dog Name: ${dog.name}</h1>
      <h2>Dog Age: ${dog.age}</h2>
      <h3>Dog Breed: ${dog.breed}</h3>
    `
  })
  .catch(err => console.error(err))
