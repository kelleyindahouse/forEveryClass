const Alchemist = require('../lib/Alchemist.js')

test('Expect name to be specified', () => {
  const alchemist = new Alchemist('Binny', 'male', 'Lizard', 300, 200, 500)
  expect(alchemist.name).toBe('Binny')
})

test('Expect gender to be specified', () => {
  const alchemist = new Alchemist('Binny', 'male', 'Lizard', 300, 200, 500)
  expect(alchemist.gender).toBe('male')
})

test('Expect race to be specified', () => {
  const alchemist = new Alchemist('Binny', 'male', 'Lizard', 300, 200, 500)
  expect(alchemist.race).toBe('Lizard')
})

test('Expect hp to be specified', () => {
  const alchemist = new Alchemist('Binny', 'male', 'Lizard', 300, 200, 500)
  expect(alchemist.hp).toBe(300)
})

test('Expect xpRate to be specified', () => {
  const alchemist = new Alchemist('Binny', 'male', 'Lizard', 300, 200, 500)
  expect(alchemist.xpRate).toBe(200)
})

test('Expect wisdom to be specified', () => {
  const alchemist = new Alchemist('Binny', 'male', 'Lizard', 300, 200, 500)
  expect(alchemist.wisdom).toBe(500)
})