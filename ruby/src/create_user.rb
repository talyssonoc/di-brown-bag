require_relative '../import.rb'
require_relative 'user.rb'

class CreateUser
  # usando dry-inject
  include Import['user_database']

  # caso for usar container manual ou DIY
  # def initialize(user_database:)
  #   @user_database = user_database
  # end

  def call(**user_data)
    user = User.new(**user_data)

    @user_database.save(user)
  end
end
