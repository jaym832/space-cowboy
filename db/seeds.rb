# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Score.destroy_all

admin = User.create(name: 'admin', role: 'admin')

p1 = User.create(name:'bob', role: 'player')

s1 = Score.create(user_id: p1.id, score:5)

a1 = Score.create(user_id:admin, score:9999)

p2 = User.create(name:'jay', role: 'player')

s2 = Score.create(user_id: p2.id, score:20)
s3 = Score.create(user_id: p2.id, score:10)

