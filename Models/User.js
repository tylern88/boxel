const { Model } = require('objection')

class User extends Model {
  static get tableName() {
    return 'User'
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['firstName', 'lastName', 'email', 'password'],
      properties: {
        id: {type: 'integer'},
        firstName: {type: 'string'},
        lastName: {type: 'string'},
        email: {type: 'string'},
        password: {type: 'string', minLength: 8}
      }
    }
  }
}

module.exports = User