'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const ProductController = use('App/Controllers/Http/ProductController');

Route.on('/').render('welcome')

Route.get('products', 'ProductController.index');
Route.post('add', 'ProductController.addProduct');
Route.post('update/:id', 'ProductController.update');
Route.delete('delete/:id', 'ProductController.deleteProduct');
Route.get('product/:id', 'ProductController.getProductById');

