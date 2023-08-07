// app/Controllers/Http/ProductController.js
const Product = use('App/Models/Product');

class ProductController {
  async index({ response }) {
    const products = await Product.all();
    return response.json(products);
  }

  async getProductById({ params, response }) {
    try {
      const productId = params.id;
      // Récupérez le produit depuis la base de données en fonction de l'ID
      const product = await Product.findBy('id', productId);
      
      if (!product) {
        return response.status(404).json({ message: 'Produit non trouvé' });
      }

      return response.status(200).json(product);
    } catch (error) {
      console.error('Erreur lors de la récupération du produit :', error);
      return response.status(500).json({ message: 'Erreur serveur' });
    }
  }

  async addProduct({ request, response }) {
    console.log('ici')
    try {
      const productData = request.all();

      // Créer un nouveau produit à partir des données reçues
      const product = new Product();
      // product.product_id = productData.product_id;
      product.uid = productData.uid;
      product.brand = productData.brand;
      product.equipment = productData.equipment;
      product.category = productData.category;
      product.available = productData.available;

      // Enregistrez le nouveau produit dans la base de données
      await product.save();

      return response.status(201).json(product);
    } catch (error) {
      console.error('Erreur lors de l\'ajout du produit :', error);
      return response.status(500).json({ message: 'Erreur serveur' });
    }
  }

    async update({ params, request, response }) {
      console.log('iciupdate')
      try {
        const productId = params.id;
        const productData = request.all();
  
        // Récupérez le produit depuis la base de données en fonction de l'ID
        const product = await Product.find(productId);
  
        if (!product) {
          return response.status(404).json({ message: 'Produit non trouvé' });
        }
  
        // Mettez à jour les champs du produit avec les nouvelles données
        product.merge(productData);
  
        // Enregistrez les modifications dans la base de données
        await product.save();
  
        return response.status(200).json(product);
      } catch (error) {
        console.error('Erreur lors de la mise à jour du produit :', error);
        return response.status(500).json({ message: 'Erreur serveur' });
      }
    }
  
    async deleteProduct({ params, response }) {
      console.log('delete')
      try {
        const productId = params.id;
        // Récupérez le produit depuis la base de données en fonction de l'ID
        const product = await Product.find(productId);
    
        if (!product) {
          return response.status(404).json({ message: 'Produit non trouvé' });
        }
    
        // Supprimez le produit de la base de données
        await product.delete();
    
        return response.status(200).json({ message: 'Produit supprimé avec succès' });
      } catch (error) {
        console.error('Erreur lors de la suppression du produit :', error);
        return response.status(500).json({ message: 'Erreur serveur' });
      }
    }
  
}

module.exports = ProductController;
