require 'dry-auto_inject'
require_relative 'container.rb'

Import = Dry::AutoInject(Container)
