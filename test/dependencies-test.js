const test = require('ava')
const { dependencies, devDependencies } = require('../package.json')
const dropModules = ['']
const isDropped = module => !dropModules.includes(module)

test('ava works ok', t => {
  t.true(true)
})

Object.keys(dependencies).forEach(dependency => {
  test(`${dependency} loads ok`, t => {
    const module = require(dependency)
    t.truthy(module)
  })
})

Object.keys(devDependencies).filter(isDropped).forEach(dependency => {
  test(`${dependency} loads ok`, t => {
    const module = require(dependency)
    t.truthy(module)
  })
})
