'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
    Route.post('/user/create', 'UserController.store');
    Route.post('/user/login', 'UserController.login');
    Route.get('/user/listUser', 'UserController.users');
    Route.get('/user/:id', 'UserController.buscarUser');
    Route.patch('/user/edit/:id', 'UserController.update');
    Route.delete('/user/:id', 'UserController.destroy');
    //Enviroments
    Route.post('/enviroments/create', 'EnviromentController.store');
    Route.get('/enviroments/listEnviroments', 'EnviromentController.enviroments');
    Route.get('/enviroments/:id', 'EnviromentController.buscarAmbiente');
    Route.patch('/enviroments/edit/:id', 'EnviromentController.update');
    Route.delete('/enviroments/:id', 'EnviromentController.destroy');
    //Prestamo
    Route.post('/prestamo/create', 'PrestamoController.store');
    Route.get('/prestamo/listPrestamo', 'PrestamoController.prestamos');
    Route.get('/prestamo/:id', 'PrestamoController.buscarPrestamo');
    Route.patch('/prestamo/edit/:id', 'PrestamoController.update');
    Route.delete('/prestamo/:id', 'PrestamoController.destroy');

}).prefix('api/v1/')