const models = require('../models')

const getAllAuthors = async (request, response) => {
  const authors = await models.authors.findAll() // { attributes: ['name', 'movie', 'slug'] })

  return response.send(authors)
}

const getAuthorByIdWithNovelsGenres = async (request, response) => {
  const { id } = request.params

  const author = await models.authors.findOne({
    where: {
      [models.Op.or]: [
        { id: id },
        { nameLast: { [models.Op.like]: `%${id}%` } },
      ]
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


module.exports = { getAllAuthors, getAuthorByIdWithNovelsGenres, }
