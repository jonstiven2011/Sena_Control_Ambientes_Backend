'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PrestamosSchema extends Schema {
  up () {
    this.create('prestamos', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.string('cuentadante', 254).notNullable()
      table.time('hora_start').notNullable()
      table.time('hora_end').notNullable()
      table.string('state', 50).notNullable()
      table.string('novedad', 500).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('prestamos')
  }
}

module.exports = PrestamosSchema
