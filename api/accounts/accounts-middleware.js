const Account = require('./accounts-model.js')

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const error = { status: 400 }
  const { name, budget } = req.body
  if ( name === undefined || budget === undefined ) {
    error.message = 'name and budget are required'
    next(error)
  } else if (typeof name !== 'string') {
    error.message = 'name of account must be a string'
    next(error)
  }
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const account = await Account.getById(req.params.id)
    if (!account) {
      next ({ status: 404, message: 'account not found' })
    } else {
      req.account = account
      next()
    }
  } catch (err) {
    next(err)
  }
}
