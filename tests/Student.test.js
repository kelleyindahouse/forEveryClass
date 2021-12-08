const Student = require('../lib/Student.js')

test('Expect name to be specified', () => {
  const student = new Student('Binny', 'male', 'Lizard', 300, 200, 500)
  expect(student.name).toBe('Binny')
})

test('Expect gender to be specified', () => {
  const student = new Student('Binny', 'male', 'Lizard', 300, 200, 500)
  expect(student.gender).toBe('male')
})

test('Expect race to be specified', () => {
  const student = new Student('Binny', 'male', 'Lizard', 300, 200, 500)
  expect(student.race).toBe('Lizard')
})

test('Expect hp to be specified', () => {
  const student = new Student('Binny', 'male', 'Lizard', 300, 200, 500)
  expect(student.hp).toBe(300)
})

test('Expect xpRate to be specified', () => {
  const student = new Student('Binny', 'male', 'Lizard', 300, 200, 500)
  expect(student.xpRate).toBe(200)
})

test('Expect wisdom to be specified', () => {
  const student = new Student('Binny', 'male', 'Lizard', 300, 200, 500)
  expect(student.wisdom).toBe(500)
})