const makeCreateUser = require('../src/createUser')

describe('createUser', () => {
  let createUser
  let mockUserRepository
  let mockMailService

  describe('when creation succeeds', () => {
    beforeEach(() => {
      mockUserRepository = {
        save: jest.fn((u) => u)
      }

      mockMailService = {
        sendConfirmEmail: jest.fn()
      }

      createUser = makeCreateUser({
        userRepository: mockUserRepository,
        mailService: mockMailService
      })
    })
    
    it('returns new user', async () => {
      const user = await createUser({
        name: 'Talysson',
        age: 27
      })

      expect(user).toEqual(
        expect.objectContaining({ name: 'Talysson' })
      )
    })

    it('sends confirmation email', async () => {
      await createUser({
        name: 'Talysson',
        age: 27
      })

      expect(mockMailService.sendConfirmEmail).toHaveBeenCalledWith(
        expect.objectContaining({ name: 'Talysson' })
      )
    })
  })

  describe('when creation fails', () => {
    beforeEach(() => {
      mockUserRepository = {
        save: jest.fn().mockRejectedValue(Error('Database is down'))
      }

      mockMailService = {
        sendConfirmEmail: jest.fn()
      }

      createUser = makeCreateUser({
        userRepository: mockUserRepository,
        mailService: mockMailService
      })
    })

    it('fails and throws an error', async () => {
      await expect(
        createUser({
          name: 'Talysson',
          age: 27
        })
      ).rejects.toThrow('Database is down')
    })

    it('does not send confirmation email', async () => {
      try {
        await createUser({
          name: 'Talysson',
          age: 27
        })
      } catch {
        expect(mockMailService.sendConfirmEmail).not.toHaveBeenCalled()
      }
    })
  })
})
