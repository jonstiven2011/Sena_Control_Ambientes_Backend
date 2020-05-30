'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EnviromentsSchema extends Schema {
  up () {
    this.create('enviroments', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.string('cuentadante', 254).notNullable()
      table.string('state', 100).notNullable()
      table.string('furnitures').notNullable().defaultTo('{}')
      table.string('equipment').notNullable().defaultTo('{}')
      table.string('novelty', 500)
      table.timestamps()
    })
  }

  down () {
    this.drop('enviroments')
  }
}

module.exports = EnviromentsSchema
