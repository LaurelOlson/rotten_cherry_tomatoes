# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

if Rails.env.development?

  # Create admin
  User.create(
    email: 'admin@admin.com',
    password: 'password',
    password_confirmation: 'password',
    firstname: Faker::Name.first_name,
    lastname: Faker::Name.last_name,
    admin: 1
  )

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

  Movie.create(
    title: 'Shok',
    director: 'James Donoughue',
    runtime_in_minutes: '21',
    description: 'Shok is a short drama film written and directed by Oscar nominated director Jamie Donoughue. It is based on true events during the Kosovo war. The film is currently in the festival circuit.',
    release_date: DateTime.parse('04/10/2015 00:00') 
  )

end