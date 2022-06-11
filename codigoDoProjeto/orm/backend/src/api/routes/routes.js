const express = require('express')
const routes = express.Router()

const controllers = require('../controllers/indexControllers.js')
const pacientesControllers = require('../controllers/pacientesControllers.js')

// rota raiz
routes.get('/', controllers.indexRaiz)

// rotas de pacientes
routes.get('/pacientes', pacientesControllers.index)
routes.post('/pacientes', pacientesControllers.store)
routes.put('/pacientes/:codigo_id', pacientesControllers.update)
routes.delete('/pacientes/:codigo_id', pacientesControllers.delete)
routes.get('/pacientes/:codigo_id', pacientesControllers.indexId)

module.exports = routes

