import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'tasks'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('assignedAt')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}