'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PrestamosSchema extends Schema {
  up () {
    this.create('prestamos', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.string('cuentadante', 254).notNullable()
      table.time('hora_start')
      table.time('hora_end')
      table.string('state', 50).notNullable()
      table.string('initial_novelty', 500)
      table.string('final_novelty', 500)
      table.timestamps()
    })
  }

  down () {
    this.drop('prestamos')
  }
}

module.exports = PrestamosSchema
