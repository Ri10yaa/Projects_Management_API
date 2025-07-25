/* eslint-disable prettier/prettier */
/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'


/* -----Login route------*/
router.post('/register','#controllers/auth_controller.register')
router.post('/login','#controllers/auth_controller.login')
router.delete('/logout','#controllers/auth_controller.logout').use(middleware.auth())
router.get('/me','#controllers/auth_controller.me')


/* ------employee-------- */
router
  .group(() => {
    router.get('/all', '#controllers/employees_controller.index')

    router.get('/:id', '#controllers/employees_controller.show')

    router.get('/', '#controllers/employees_controller.show') // query parameter send empName and email

    router.post('/', '#controllers/employees_controller.store')

    router.put('/:id', '#controllers/employees_controller.update')

    router.patch('/:id', '#controllers/employees_controller.handlePatch')

    router.delete('/:id', '#controllers/employees_controller.destroy')
  })
  .prefix('emp').use(middleware.auth())

/* ------Manager------- */

router
  .group(() => {
    router.get('/all', '#controllers/managers_controller.index')

    router.get('/:id', '#controllers/managers_controller.show')

    router.get('/', '#controllers/managers_controller.show') // query parameter: send mgrName, email

    router.post('/', '#controllers/managers_controller.store')

    router.put('/:id', '#controllers/managers_controller.update')

    router.patch('/:id', '#controllers/managers_controller.handlePatch')

    router.delete('/:id', '#controllers/managers_controller.destroy')

    router.get('/all/id','#controllers/managers_controller.get')
  })
  .prefix('mgr').use(middleware.auth())

/* --------Projects---------- */

router
  .group(() => {
    router.get('/all', '#controllers/projects_controller.index')

    router.get('/:id', '#controllers/projects_controller.show')

    router.get('/', '#controllers/projects_controller.show') // query parameter: send proTitle and type

    router.post('/', '#controllers/projects_controller.store')

    router.put('/:id', '#controllers/projects_controller.update')

    router.patch('/:id', '#controllers/projects_controller.handlePatch')

    router.delete('/:id', '#controllers/projects_controller.destroy')
  })
  .prefix('pro').use(middleware.auth())

/* -------Tasks------- */

router
  .group(() => {
    router.get('/all', '#controllers/tasks_controller.index')

    router.get('/:id', '#controllers/tasks_controller.show')

    router.get('/', '#controllers/tasks_controller.show') // query parameter: send taskTitle and empId

    router.post('/', '#controllers/tasks_controller.store')

    router.put('/:id', '#controllers/tasks_controller.update')

    router.patch('/:id', '#controllers/tasks_controller.handlePatch')

    router.delete('/:id', '#controllers/tasks_controller.destroy')
  })
  .prefix('task').use(middleware.auth())
