var express = require('express');
var router = express.Router();
var Contrato = require('../controllers/contrato');

// GET /
router.get('/', (req, res, next) => {
  Contrato.list()
    .then(data => res.json(data))
    .catch(next);
});


// GET /contratos
router.get('/contratos', function(req, res, next) {
  Contrato.list()
    .then(data => res.json(data))
    .catch(next);
});

// GET /contratos?entidade=EEEE
router.get('/contratos', function(req, res, next) {
  if(req.query.entidade) {
    Contrato.findByEntidade(req.query.entidade)
      .then(data => res.json(data))
      .catch(next);
  } else if(req.query.tipo) {
    Contrato.findByTipo(req.query.tipo)
      .then(data => res.json(data))
      .catch(next);
  } else {
    res.status(400).json({ error: 'Invalid query parameters' });
  }
});

// GET /contratos/entidades
router.get('/contratos/entidades', function(req, res, next) {
  Contrato.listUniqueEntidades()
    .then(data => res.json(data))
    .catch(next);
});

// GET /contratos/tipos
router.get('/contratos/tipos', function(req, res, next) {
  Contrato.listUniqueTipos()
    .then(data => res.json(data))
    .catch(next);
});

// POST /contratos
router.post('/contratos', function(req, res, next) {
  Contrato.create(req.body)
    .then(data => res.status(201).json(data))
    .catch(next);
});

// DELETE /contratos/:id
router.delete('/contratos/:id', function(req, res, next) {
  Contrato.delete(req.params.id)
    .then(() => res.status(204).end())
    .catch(next);
});

// PUT /contratos/:id
router.put('/contratos/:id', function(req, res, next) {
  Contrato.updateById(req.params.id, req.body)
    .then(() => res.status(204).end())
    .catch(next);
});

// GET /contratos/:id
router.get('/contratos/:id', function(req, res, next) {
  Contrato.findById(req.params.id)
    .then(data => res.json(data))
    .catch(next);
});

module.exports = router;