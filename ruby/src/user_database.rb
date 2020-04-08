class UserDatabase
  def initialize
    @users = []
    @last_id = 0
  end

  def save(user)
    puts "Saving user #{user.name}"

    user.id = ++@last_id

    @users.push(user)

    user
  end
end
