const managerAccount = require('./managerAccount');
const managerDetail = require('./managerDetail');
const managerRole = require('./managerRole');
function Router(app) {
    // Router /Account
    app.use('/api/ManagerDetail',managerDetail);
    app.use('/api/ManagerAccount',managerAccount);
    app.use('/api/ManagerRole',managerRole);
}
module.exports = Router;
