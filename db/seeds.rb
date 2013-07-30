# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
feeds = Feed.create([{title: "5by5", url: "http://5by5.tv/rss"},
  {title: "nytimes", url: "http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"}
 ])

