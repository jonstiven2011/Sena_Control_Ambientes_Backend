'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjectSchema extends Schema {
    up() {
        this.create('projects', (table) => {
            table.increments()
            table.string('username', 80).notNullable().unique()
            table.timestamps()
        })
    }

    down() {
        this.drop('projects')
    }
}

module.exports = ProjectSchema