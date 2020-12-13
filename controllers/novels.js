const models = require('../models')

const getAllNovels = async (request, response) => {
  const novels = await models.novels.findAll()

  return response.send(novels)
}

const getNovelsById = async (request, response) => {
  const { id } = request.params

  const novels = await models.novels.findOne({
    where: {
      [models.Op.or]: [
        { id: id },
        { title: { [models.Op.like]: `%${id}%` } }
      ]
    },
    include: [
      { model: models.authors },
      { model: models.genres }
    ]
  })

  return novels
    ? response.send(novels)
    : response.sendStatus(404)
}



module.exports = { getAllNovels, getNovelsById }
