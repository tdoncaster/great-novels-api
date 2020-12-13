const express = require('express')
const { getAllAuthors, getAuthorByIdWithNovelsGenres, } = require('./controllers/authors')
const { getAllGenres, getGenresById } = require('./controllers/genres')
const { getAllNovels, getNovelsById } = require('./controllers/novels')

const app = express()

app.get('/authors', getAllAuthors)
app.get('/authors/:id', getAuthorByIdWithNovelsGenres)


app.get('/novels', getAllNovels)
app.get('/novels/:id', getNovelsById)

app.get('/genres', getAllGenres)
app.get('/genres/:id', getGenresById)

app.listen(1321, () => {
  console.log('Listening on port 1321...') // eslint-disable-line no-console
})
