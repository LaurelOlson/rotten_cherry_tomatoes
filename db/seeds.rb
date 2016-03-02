# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

if Rails.env.development?

  # Create admin
  # User.create(
  #   email: 'admin@admin.com',
  #   password: 'password',
  #   password_confirmation: 'password',
  #   firstname: Faker::Name.first_name,
  #   lastname: Faker::Name.last_name,
  #   admin: 1
  # )

  # Create users
  10.times do
    User.create(
      email: Faker::Internet.email,
      password: 'password',
      password_confirmation: 'password',
      firstname: Faker::Name.first_name,
      lastname: Faker::Name.last_name
    )
  end

end