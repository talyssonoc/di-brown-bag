const mailService = () => ({
  sendConfirmEmail(user) {
    console.log(`Sending confirmation email to user ${user.name}`)
  }
})

module.exports = mailService
