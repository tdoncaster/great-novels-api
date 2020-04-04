# Great Novels API

## Part 1 Instructions
In the initial commit of this project you were provided with data on several novels including their author and genres. Working in a branch called `part-one-answer`, your tasks are:

1) Design a normalized table structure to hold this data
2) Create the SQL to build that database with its user and tables and insert all of the data
3) Create an Express driven REST API that allows a user to retrieve the data

Your API should support the routes listed below, pulling the data from the database via Sequelize models.

## Requests and Expected Respones

### Get All Authors

**GET** http://localhost:1337/authors

**Response**
```JSON
[
  {
    id: 1,
    nameFirst: 'Bram',
    nameLast: 'Stoker',
    createdAt: '2020-04-04T15:57:59.000Z',
    updatedAt: '2020-04-04T15:57:59.000Z'
  },
  {
    id: 2,
    nameFirst: 'Oscar',
    nameLast: 'Wilde',
    createdAt: '2020-04-04T15:57:59.000Z',
    updatedAt: '2020-04-04T15:57:59.000Z'
  },
  ... all other authors
]
```

### Get an Author with their novels and those novels genres by the author's Id

**GET** http://localhost:1337/authors/2

**Response**
```JSON
{
  id: 2,
  nameFirst: 'Oscar',
  nameLast: 'Wilde',
  createdAt: '2020-04-04T15:57:59.000Z',
  updatedAt: '2020-04-04T15:57:59.000Z',
  novels: [
    {
      id: 2,
      title: 'The Picture of Dorian Gray',
      authorId: 2,
      createdAt: '2020-04-04T15:57:59.000Z',
      updatedAt: '2020-04-04T15:57:59.000Z',
      genres: [
        {
          id: 6,
          name: 'Fantasy',
          createdAt: '2020-04-04T15:57:58.000Z',
          updatedAt: '2020-04-04T15:57:58.000Z',
          novelsGenres: {
            genreId: 6,
            novelId: 2,
            createdAt: '2020-04-04T15:58:00.000Z',
            updatedAt: '2020-04-04T15:58:00.000Z'
          }
        },
        ... all other genres for novel
      ]
    },
    ... all other novels by author
  ]
}
```

### Get All Genres

**GET** http://localhost:1337/genres

**Response**
```JSON
[
  {
    id: 1,
    name: 'Adventure',
    createdAt: '2020-04-04T15:57:58.000Z',
    updatedAt: '2020-04-04T15:57:58.000Z'
  },
  {
    id: 2,
    name: 'African Literature',
    createdAt: '2020-04-04T15:57:58.000Z',
    updatedAt: '2020-04-04T15:57:58.000Z'
  },
  ... all other genres
]
```

### Get a Genre with all novels in that genres and those novels author by the genre's Id

**GET** http://localhost:1337/genres/2

**Response**
```JSON
{
  id: 2,
  name: 'African Literature',
  createdAt: '2020-04-04T15:57:58.000Z',
  updatedAt: '2020-04-04T15:57:58.000Z',
  novels: [
    {
      id: 15,
      title: 'Things Fall Apart',
      authorId: 15,
      createdAt: '2020-04-04T15:58:00.000Z',
      updatedAt: '2020-04-04T15:58:00.000Z',
      novelsGenres: {
        genreId: 2,
        novelId: 15,
        createdAt: '2020-04-04T15:58:01.000Z',
        updatedAt: '2020-04-04T15:58:01.000Z'
      },
      author: {
        id: 15,
        nameFirst: 'Chinua',
        nameLast: 'Achebe',
        createdAt: '2020-04-04T15:57:59.000Z',
        updatedAt: '2020-04-04T15:57:59.000Z'
      }
    }
  ]
}
```

### Get All Novels with their authors and genres

**GET** http://localhost:1337/novels

**Response**
```JSON
[
  {
    id: 1,
    title: 'Dracula',
    authorId: 1,
    createdAt: '2020-04-04T15:57:59.000Z',
    updatedAt: '2020-04-04T15:57:59.000Z',
    author: {
      id: 1,
      nameFirst: 'Bram',
      nameLast: 'Stoker',
      createdAt: '2020-04-04T15:57:59.000Z',
      updatedAt: '2020-04-04T15:57:59.000Z'
    },
    genres: [
      {
        id: 6,
        name: 'Fantasy',
        createdAt: '2020-04-04T15:57:58.000Z',
        updatedAt: '2020-04-04T15:57:58.000Z',
        novelsGenres: {
          genreId: 6,
          novelId: 1,
          createdAt: '2020-04-04T15:58:00.000Z',
          updatedAt: '2020-04-04T15:58:00.000Z'
        }
      },
      ... all other genres for novel
    ]
  },
  ... all other novels
]
```

### Get a Novel with its author and genres the novel's Id

**GET** http://localhost:1337/novels/4

**Response**
```JSON
{
  id: 4,
  title: 'War and Peace',
  authorId: 4,
  createdAt: '2020-04-04T15:57:59.000Z',
  updatedAt: '2020-04-04T15:57:59.000Z',
  author: {
    id: 4,
    nameFirst: 'Leo',
    nameLast: 'Tolstoy',
    createdAt: '2020-04-04T15:57:59.000Z',
    updatedAt: '2020-04-04T15:57:59.000Z'
  },
  genres: [
    {
      id: 7,
      name: 'Fiction',
      createdAt: '2020-04-04T15:57:58.000Z',
      updatedAt: '2020-04-04T15:57:58.000Z',
      novelsGenres: {
        genreId: 7,
        novelId: 4,
        createdAt: '2020-04-04T15:58:00.000Z',
        updatedAt: '2020-04-04T15:58:00.000Z'
      }
    },
    ... all other genres for novel
  ]
}
```

## Part 2 Instructions
In a branch called `part-two-answer`, continuing from your previous work, your tasks are:

1) Create a Sequelize Migration to create your table structure in the database (you'll need to drop and recreate your existing database to clear it out)
2) Create a Sequelize Migration that will populate your database with all the data
2) Create a .env and .env-sample file to support your dynamic configuration
3) Update your API to support the new routes listed below, **all existing routes should continue to work**

## Requests and Expected Respones

### Get Author by Last Name (partial match)

**GET** http://localhost:1337/authors/wild

**Response**
```JSON
{
  id: 2,
  nameFirst: 'Oscar',
  nameLast: 'Wilde',
  createdAt: '2020-04-04T15:57:59.000Z',
  updatedAt: '2020-04-04T15:57:59.000Z',
  novels: [
    {
      id: 2,
      title: 'The Picture of Dorian Gray',
      authorId: 2,
      createdAt: '2020-04-04T15:57:59.000Z',
      updatedAt: '2020-04-04T15:57:59.000Z',
      genres: [
        {
          id: 6,
          name: 'Fantasy',
          createdAt: '2020-04-04T15:57:58.000Z',
          updatedAt: '2020-04-04T15:57:58.000Z',
          novelsGenres: {
            genreId: 6,
            novelId: 2,
            createdAt: '2020-04-04T15:58:00.000Z',
            updatedAt: '2020-04-04T15:58:00.000Z'
          }
        },
        ... all other genres for novel
      ]
    },
    ... all other novels by author
  ]
}
```

### Get Novel by Title (partial match)
**GET** http://localhost:1337/novels/peace

**Response**
```JSON
{
  id: 4,
  title: 'War and Peace',
  authorId: 4,
  createdAt: '2020-04-04T15:57:59.000Z',
  updatedAt: '2020-04-04T15:57:59.000Z',
  author: {
    id: 4,
    nameFirst: 'Leo',
    nameLast: 'Tolstoy',
    createdAt: '2020-04-04T15:57:59.000Z',
    updatedAt: '2020-04-04T15:57:59.000Z'
  },
  genres: [
    {
      id: 7,
      name: 'Fiction',
      createdAt: '2020-04-04T15:57:58.000Z',
      updatedAt: '2020-04-04T15:57:58.000Z',
      novelsGenres: {
        genreId: 7,
        novelId: 4,
        createdAt: '2020-04-04T15:58:00.000Z',
        updatedAt: '2020-04-04T15:58:00.000Z'
      }
    },
    ... all other genres for novel
  ]
}
```
