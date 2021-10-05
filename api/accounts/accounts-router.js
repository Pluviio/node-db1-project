const router = require('express').Router()
const Accounts  = require('./accounts-model.js')


router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
  Accounts.getAll(req.query)
  .then(accounts => {
    res.status(200).json(accounts);
  })
  .catch(error)
})

router.get('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
