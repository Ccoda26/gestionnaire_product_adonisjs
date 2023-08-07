// app/Controllers/Http/AuthController.js

const User = use('App/Models/User');

class AuthController {
    async register({ request, response }) {
        // const userData = request.all();
    
        // // Vérifiez si l'utilisateur existe déjà dans la base de données
        // const userExists = await User.query().where('email', userData.email).first();
    
        // if (userExists) {
        //   return response.status(400).json({ message: 'L\'utilisateur existe déjà' });
        // }
    
        // // Créez un nouvel utilisateur dans la base de données
        // const newUser = await User.create(userData);
    
        // return response.status(201).json({ message: 'Utilisateur créé avec succès', user: newUser });
      }
}

module.exports = AuthController;
