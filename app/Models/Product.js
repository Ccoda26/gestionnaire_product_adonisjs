// app/Models/Product.js

const Model = use('Model');

class Product extends Model {
  static get table() {
    return 'products';
  }

  static get primaryKey() {
    return 'product_id';
  }

  static get number_uid() {
    return 'uid';
  }

  static get brand() {
    return 'brand';
  }

  static get equipment() {
    return 'equipment';
  }


  static get category() {
    return 'category';
  }


  static get available() {
    return 'available';
  }

  static get createdAtColumn() {
    return 'created_at'; // Si vous n'avez pas de colonne "created_at", mettez cette ligne sinon remplacez par le nom de la colonne si différent
  }

  static get updatedAtColumn() {
    return 'updatedAtColumn'; // Si vous n'avez pas de colonne "updated_at", mettez cette ligne sinon remplacez par le nom de la colonne si différent
  }
}

module.exports = Product;
