const User = require('./User')

const createUser = ({ mailService, userRepository }) => async (userData) => {
  const newUser = User.build(userData)

  const user = await userRepository.save(newUser)

  mailService.sendConfirmEmail(user)

  return user
}

module.exports = createUser
