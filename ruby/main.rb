require 'rubygems'
require 'bundler/setup'
require_relative 'container.rb'

create_user = Container['create_user']

user = create_user.call(
  name: 'Talysson',
  age: 27
)

puts "{ id: #{user.id}, name: #{user.name}, age: #{user.age} }"
