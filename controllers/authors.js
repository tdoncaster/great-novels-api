const models = require('../models')

const getAllAuthors = async (request, response) => {
  const authors = await models.authors.findAll() // { attributes: ['name', 'movie', 'slug'] })

  return response.send(authors)
}

const getAuthorByIdWithNovelsGenres = async (request, response) => {
  const { id } = request.params

  const author = await models.authors.findOne({
    where: { id },
    include: [{
      model: models.novels,
      include: [{ model: models.genres }]
    }],
  })

  const getAuthorByFuzzy = async (request, response) => {
    const { name } = request.params
  
    const author = await models.Manufacturers.findOne({
      attribute: [ 'lastName' ],
      where: {
        name: { [models.Op.like]: `%${lastName}%` }
      },
  
      include: [{
        model: models.novels,
        include: [{ model: models.genres }]
      }]
    })
  





  return author
    ? response.send(author)
    : response.sendStatus(404)
  }


module.exports = { getAllAuthors, getAuthorByIdWithNovelsGenres, getAuthorByFuzzy }
