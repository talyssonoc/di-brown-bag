async function main() {
  const createUser = require('./createUser')

  const user = await createUser({
    name: 'Talysson',
    age: 27
  })

  console.log('New user ->', user)
}

main()
