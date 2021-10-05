const db = require('../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  return db('accounts')
  .select('id', 'name', 'budget')
}

const getById = async (id) => {
  // DO YOUR MAGIC
  return db('accounts')
  .where('id', id)
  .first()
}

async function create (account){
  // DO YOUR MAGIC
  const [id] = await db('accounts')
    .insert(account)
    return getById(id)
}

async function updateById (id, account) {
  // DO YOUR MAGIC
  await db ('accounts')
  .update(account)
  .where('id', id)
}

async function deleteById  (id) {
  // DO YOUR MAGIC
  const removed = await getById(id)
  await db ('accounts')
  .where('id', id)
  .delete()
  return removed
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
