'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
    up() {
        this.create('users', (table) => {
            table.increments()
            table.string('name', 80).notNullable()
            table.string('documentType', 254).notNullable()
            table.string('document', 254).notNullable().unique()
            table.string('email', 254).notNullable().unique()
            table.string('user_rol', 254).notNullable()
            table.string('password', 60).notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('users')
    }
}

module.exports = UserSchema