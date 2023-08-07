'use strict'

const { Command } = require('@adonisjs/ace')
const axios = require('axios');
const Product = use('App/Models/Product');

class FetchProduct extends Command {
  static get signature () {
    return 'fetch:product'
  }

  static get description () {
    return 'Fetch products from the API and save them to the database'
  }

  async handle (args, options) {
    this.info('La commande fetch:products a été appelée!');
    try {
      // Faites une requête GET à l'API pour récupérer les produits
      const response = await axios.get('https://random-data-api.com/api/v2/appliances?size=5');

      // Les données des produits sont dans response.data, vous pouvez les utiliser pour l'enregistrement dans la base de données
      const products = response.data;
      
      // Enregistrez les produits dans la base de données
      await Promise.all(products.map(async (product) => {
        // Vérifiez si le produit existe déjà dans la base de données en fonction de l'UID
        const existingProduct = await Product.findBy('uid', product.uid);
        if (existingProduct) {
          // Le produit existe déjà, mettez à jour ses détails
          existingProduct.brand = product.brand;
          existingProduct.equipment = product.equipment;
          existingProduct.category = product.category;
          existingProduct.available = product.available;
          await existingProduct.save();
        } else {
          // Le produit n'existe pas encore, créez-en un nouveau
          await Product.create({
            product_id: product.id,
            uid: product.uid,
            brand: product.brand,
            equipment: product.equipment,
          });
        }
      }));

      this.success('Les produits ont été enregistrés dans la base de données avec succès.');
    } catch (error) {
        // En cas d'erreur lors de la récupération des produits depuis l'API
        this.error('Une erreur s\'est produite lors de la récupération des produits depuis l\'API.');
        this.error(error.message);
    }
  }
}

module.exports = FetchProduct
