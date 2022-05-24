# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

TownEvent.destroy_all
User.destroy_all
Organizer.destroy_all

#organizers
puts 'Seeding organizers..'
mike=Organizer.create(first_name: "Mike", 
last_name: "Miles", 
email: "mmiles246@yahoo.com", 
password: "password1", 
about: "Random information about our first test Organizer here!",
admin: true
)

mike.profile_img.attach(
    io: File.open('./client/src/imgs/rr_tunnel.png'),
    filename: 'rr_tunnel.png',
    content_type: 'application/png'
)

test2=Organizer.create(first_name: "Test2", 
last_name: "Organizer2", 
email: "testorganizer2@aol.com", 
password: "password2",
about: "Even more random info about the second test organizer here!",
admin: false
)

#Users
puts "Seeding users..."

tillie=User.create(first_name: "Tillie", 
last_name: "Park", 
email: "local07712@gmaill.com", 
password: "local320",
about: "Town Icon",
interested_in: [
    "volunteer",
    "sports"
    ],
newsletter: true
)
tillie.profile_img.attach(
    io: File.open('./client/src/imgs/tillie.png'),
    filename: 'tillie.png',
    content_type: 'application/png'
)

user=User.create(first_name: "Stone",  
last_name: "Pony", 
email: "summerstage22@yahoo.com", 
password: "password",
about: "Dark Horse",
interested_in: ["sports"],
newsletter: true
)



#events
puts "Seeding townEvents..."
TownEvent.create(name: "Beach Sweep", 
type_of: "volunteer", 
start_time: DateTime.parse("June 04, 2022 10:30:00"), 
end_time: DateTime.parse("June 04, 2022 13:00:00"), 
location: "7th Ave Beach",
event_description: "Event Description will be here. Catch first 140? characters for Modal blurb.",
sponsors: ["Ap-Pickup"], 
organizer_id: mike.id
)

TownEvent.create(name: "Street Sweep", 
type_of: "volunteer", 
start_time: DateTime.parse("June 05, 2022 10:30:00"), 
end_time: DateTime.parse("June 05, 2022 13:00:00"), 
location: "7th Ave",
event_description: "Event Description will be here. Catch first 140? characters for Modal blurb.",
sponsors: [],
organizer_id: mike.id
)

TownEvent.create(name: "Park Sweep", 
type_of: "volunteer", 
start_time: DateTime.parse("June 06, 2022 10:30:00"), 
end_time: DateTime.parse("June 06, 2022 13:00:00"), 
location: "7th Ave Park", 
event_description: "Event Description will be here. Catch first 140? characters for Modal blurb.",
sponsors: ['Salon Jador', 'Killer Pies'],
organizer_id: test2.id
)


puts "Seeding Complete!"