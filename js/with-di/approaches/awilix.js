const Awilix = require('awilix')

const makeUserRepository = require('../src/fakeUserRepository')
const makeMailService = require('../src/mailService')
const makeCreateUser = require('../src/createUser')

const container = Awilix.createContainer()

container.register({
  userRepository: Awilix.asFunction(makeUserRepository),
  mailService: Awilix.asFunction(makeMailService),
  createUser: Awilix.asFunction(makeCreateUser)
})

module.exports = container
