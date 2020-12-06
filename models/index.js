const Sequelize = require('sequelize')
const authorsModel = require('./authors')
const genresModel = require('./genres')
const novelsModel = require('./novels')
const novelsgenresModel = require('./novelsgenres')


const connection = new Sequelize('greatnovels', 'greatnovels1', 'Greatnovels!', {
  host: 'localhost', dialect: 'mysql'
})

const authors = authorsModel(connection, Sequelize)
const genres = genresModel(connection, Sequelize)
const novels = novelsModel(connection, Sequelize)
const novelsgenres = novelsgenresModel(connection, Sequelize, genres, novels)

novels.belongsToMany(genres, { through: novelsgenres })
genres.belongsToMany(novels, { through: novelsgenres })
authors.hasMany(novels)
novels.belongsTo(authors)

module.exports = { authors, genres, novels, novelsgenres }
