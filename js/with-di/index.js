const container = require('./approaches/______')

async function main() {
  const createUser = null /* fetch from container */ 

  const user = await createUser({
    name: 'Talysson',
    age: 27
  })

  console.log('New user ->', user)
}

main()
