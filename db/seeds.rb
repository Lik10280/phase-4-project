# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

types = Type.create([{ name: 'Houses', description: 'A house is a single-unit residential building.' }, 
    { name: 'Townhomes', description: 'A townhouse, townhome, town house, or town home, is a type of terraced housing. A modern townhouse is often one with a small footprint on multiple floors.' },
    { name: 'Multi-family', description: 'Multifamily residential (also known as multidwelling unit or MDU) is a classification of housing where multiple separate housing units for residential inhabitants are contained within one building or several buildings within one complex.' },
    { name: 'Condos', description: 'A condominium (or condo for short) is a building structure divided into several units that are each separately owned, surrounded by common areas that are jointly owned.' }]),

    # seed users
User.create(username: "john_doe", password: "1234", age:25, occupation: "Farmer", interest: "swimming")
User.create(username: "jane_smith", password: "1028", age: 30, occupation: "Doctor", interest: "driving")
User.create(username: "bob_johnson", password: "lik1", age: 23, occupation: "Teacher", interest: "watching")

# seed new appartments
# Create some apartments
Apartment.create(location: "123 Main St", rent: 1500, num_of_bedrooms: 2, num_of_bathrooms: 2, user_id: 1, type_id: 1, image_url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")
Apartment.create(location: "456 Elm St", rent: 2000, num_of_bedrooms: 3, num_of_bathrooms: 3, user_id: 2, type_id: 2, image_url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")
Apartment.create(location: "789 Oak St", rent: 1200, num_of_bedrooms: 1, num_of_bathrooms: 1, user_id: 3, type_id: 3, image_url: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")

# after-- (rails db:migrate db:seeds)
# generate serializers--(rails g serializer Type --no-test-framework
    #  rails g serializer User --no-test-framework)
    #  copy paste routes in routes.rb
    # run back end --rails s
    # 