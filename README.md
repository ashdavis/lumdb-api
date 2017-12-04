# LUMDB API - Level Up Movie Database API

## Introduction

LUMDB API is a simple Node.js REST API built using Express that fetches movie data from [The Movie DB API](https://www.themoviedb.org/documentation/api).

The project acts as a backend to the [lumdb](https://github.com/ashdavis/lumdb) React frontend app.


## Project Features

- REST API built using the Express web framework for Node.js
- CORS configuration for whitelisting domains


## How to Use

### Prerequisites

- Sign up for access to [The Movie DB API](https://www.themoviedb.org/) and make a note of your API key (v3 auth).

- To find your API key on The Movie DB site, go to [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api) when signed in.

### Installation

Clone the repository

```sh
git clone https://github.com/ashdavis/lumdb.git
```

Move into the lumdb project directory

```sh
cd lumdb
```

Create a `.env` file at the root of the project.

Copy the contents of `.env-template` into `.env` and replace `INSERT_TMDB_API_KEY_HERE` with your Movie DB API key.

### Develop

```sh
npm start
```

Starts the server and listens on port `8080`.

The port can be changed by setting the `PORT` environment variable.


## API Documentation

### GET /discover

Returns the first page of en-US language movies sorted by popularity in descending order.

### GET /movie/:id

Returns details of the movie that matches the provided ID.

### CORS

The server is configured to only enable CORS requests from domains that are on a whitelist.

The `whitelist` variable in `index.js` is assigned array of URLs that the server should accept requests from.

## Technology Used

- [Node.js](https://nodejs.org)
- [Express](https://expressjs.com/)
- [Axios](https://github.com/axios/axios)


## Contributors

### Development

- Ashley Davis
