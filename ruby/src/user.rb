class User
  attr_accessor :id, :name, :age

  def initialize(id: nil, name:, age:)
    @name = name
    @age = age
  end
end
