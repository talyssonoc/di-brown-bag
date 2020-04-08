const makeUserRepository = require('../src/fakeUserRepository')
const makeMailService = require('../src/mailService')
const makeCreateUser = require('../src/createUser')

const userRepository = makeUserRepository()
const mailService = makeMailService()

const createUser = makeCreateUser({ userRepository, mailService })

module.exports = {
  createUser
}
