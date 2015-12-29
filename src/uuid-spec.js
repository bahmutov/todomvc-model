/* global describe, it */
const la = require('lazy-ass')
const is = require('check-more-types')

describe('uuid', () => {
  const uuid = require('./uuid')
  it('is a function', () => {
    la(is.fn(uuid))
  })

  it('returns a long string', () => {
    const id = uuid()
    la(is.unemptyString(id))
    la(id.length === 36, 'right length', id, id.length)
  })
})
