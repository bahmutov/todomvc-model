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

  describe('utils', () => {
    const utils = Todos.utils

    it('has uuid method', () => {
      la(is.fn(utils.uuid))
    })

    it('has factory method', () => {
      la(is.fn(utils.factory))
    })

    it('creates todo item', () => {
      const todo = utils.factory('test')
      la(is.object(todo), 'created new item')
      la(todo.id, 'has id', todo)
    })
  })
})
