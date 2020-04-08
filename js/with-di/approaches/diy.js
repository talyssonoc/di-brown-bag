const dependencies = {
  userRepository: require('../src/fakeUserRepository'),
  mailService: require('../src/mailService'),
  createUser: require('../src/createUser')
}

module.exports = Object.keys(dependencies).reduce((container, depName) => {
  Object.defineProperty(container, depName, {
    get: () => dependencies[depName](container)
  })

  return container
}, {})
