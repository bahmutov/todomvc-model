const la = require('lazy-ass')
const is = require('check-more-types')
const uuid = require('./uuid')

var Todos = {
  add: function add (what) {
    la(is.unemptyString(what), 'expected unempty string', what)
    Todos.items.unshift({
      what: what,
      done: false,
      id: uuid()
    })
  },
  mark: function mark (id, done) {
    la(is.unemptyString(id), 'expected id', id)
    Todos.items.forEach(function (todo) {
      if (todo.id === id) {
        todo.done = done
      }
    })
  },
  remove: function remove (todo) {
    la(is.object(todo), 'missing todo to remove', todo)
    Todos.items = Todos.items.filter(function (t) {
      return t.id !== todo.id
    })
  },
  clearCompleted: function clearCompleted () {
    console.log('clearCompleted not implemented')
  },
  items: []
}

la(is.array(Todos.items), 'expected list of todos', Todos.items)

module.exports = Todos
