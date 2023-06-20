const accountManager = require('./accountManager')

function Router(app) {
    // Router /Account
    app.use('/api/AccountManager',accountManager)
}
module.exports = Router;
