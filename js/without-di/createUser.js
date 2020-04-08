const User = require('./User')
const UserRepository = require('./userRepository')
const MailService = require('./mailService')

const createUser = async (userData) => {
  const userRepository = UserRepository()
  const mailService = MailService()

  const newUser = User.build(userData)

  const user = await userRepository.save(newUser)

  mailService.sendConfirmEmail(user)

  return user
}

module.exports = createUser
