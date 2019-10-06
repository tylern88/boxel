const express = require('express')
const bodyParser = require('body-parser')
const { Model } = require('objection')
const Knex = require('knex')
const morgan = require('morgan')
const knexConfig = require('./knexfile')
const PORT = 3000

const knex = Knex(knexConfig.development)
Model.knex(knex)

const app = express()
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(morgan('dev'))


app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))
