const novelsgenres = (connection, Sequelize, genres, novels) => {
  return connection.define('novelsgenres', {
    genreId: { type: Sequelize.INTEGER, references: { model: genres, key: 'id' } },
    novelId: { type: Sequelize.INTEGER, references: { model: novels, key: 'id' } },
  }, { paranoid: true })
}

module.exports = novelsgenres
