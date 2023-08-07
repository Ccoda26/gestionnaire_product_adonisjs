'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.int('product_id',).notNullable().unique()
      table.string('uid', 100).notNullable().unique()
      table.string('brand', 100).defaultTo(null)
      table.string('equipment', 100).defaultTo(null)
      table.string('category', 50).defaultTo(null)
      table.boolean('available').notNullable().defaultTo(false)
      table.timestamp('created_at').defaultTo(null)
      table.timestamp('updatedAtColumn').defaultTo(this.now())
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductsSchema
