require 'dry-container'

class Container
  extend Dry::Container::Mixin
  
  register(:create_user) do
    require_relative 'src/create_user.rb'
    
    CreateUser.new
  end
  
  register(:user_database) do
    require_relative 'src/user_database.rb'
  
    UserDatabase.new
  end
end

