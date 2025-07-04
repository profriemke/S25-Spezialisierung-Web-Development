import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'note_checks'

  async up() {
    this.schema.alterTable('notes', (table) => {
     table.boolean('checked').defaultTo(false)
    })
  }

  async down() {
     this.schema.alterTable('notes', (table) => {
    table.dropColumn('checked')
    })
   
  }
}