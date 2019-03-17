const request = require('supertest')

jest.mock('pg-promise')
const pg_promise = require("pg-promise")
pg_promise.mockImplementation(() => {
    return function() {
        return {
            any: () => Promise.resolve({'test': 1})
        }
    }
})
const {app,} = require('../app')

test('calling POST returns 200', done => {
    request(app)
      .post('/')
      .then(response => {
            expect(response.status).toBe(200)
            done()
      })
})

test('calling GET returns 200', done => {
    request(app)
      .get('/')
      .then(response => {
            expect(response.status).toBe(200)
            done()
      })
})
