const container = require('./approaches/awilix')

async function main() {
  const createUser = container.resolve('createUser') /* fetch from container */ 

  const user = await createUser({
    name: 'Talysson',
    age: 27
  })

  console.log('New user ->', user)
}

main()
