var express = require('express');
var router = express.Router();
var Contrato = require('../controllers/contrato');

// GET /
router.get('/', (req, res, next) => {
  Contrato.list()
    .then(response => {
        const contratos = response.data;
        res.render('index', { title: 'Indice de Contratos', contratos});
    })
    .catch(error => {
        res.status(500).send(error);
    });
});



// GET /entidades/:nipc
router.get('/entidades/:nipc', function(req, res, next) {
  const nipc = req.params.nipc;

  // procura contratos com o nipc
  Contrato.findByNIPC(nipc)
    .then(contracts => {
      // coma precos
      const totalValue = sumContractPrices(contracts);

      // pega no primeiro contrato e ve a entidade
      const entity = contracts.length > 0 ? contracts[0].entidade_comunicante : null;

      if (!entity) {
        return res.status(404).send('Entidade não encontrada');
      }

      res.render('entidade', {
        title: 'Página da Entidade',
        nipc: nipc,
        nome: entity,
        contratos: contracts,
        totalValue: totalValue
      });
    })
    .catch(next);
});


// soma os precos dos contratos
function sumContractPrices(contracts) {
  let total = 0;
  contracts.forEach(contract => {
    total += parseFloat(contract.precoContratual);
  });
  return total;
}

// GET /contratos/:id
router.get('/contratos/:id', function(req, res, next) {
  Contrato.findById(req.params.id)
    .then(data => res.render('contrato', { contrato: data }))
    .catch(next);
});

module.exports = router;