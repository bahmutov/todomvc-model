/* global describe, it */
const la = require('lazy-ass')
const is = require('check-more-types')

describe('todos', () => {
  const Todos = require('./todos')
  it('is an object', () => {
    la(is.object(Todos))
  })

  it('has list of todos', () => {
    la(is.array(Todos.items))
  })
})
