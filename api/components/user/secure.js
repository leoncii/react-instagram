const auth = require('../../../auth')

module.exports = function checkAuth(action) {
  function middleware(req, res, next) {
    console.table('*******************************************')
    // console.table('[REs]:', res)
    switch (action) {
      case 'update':
        const owner = req.body.id
        auth.check.own(req, owner)
        next()
        break
      default:
        next()
    }
  }
  return middleware
}
