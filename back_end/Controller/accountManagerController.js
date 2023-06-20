const DB = require('../Config')
class AccountManagerController {
    async Select(req,res,next){
        const SqlSelect = 'SELECT * FROM account_manager';
        const getAccountManager = new Promise((resolve, reject) => {
            DB.query(SqlSelect, (err, result) => {
                if(err) {
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
        try{
            const dataGetAccountManager = await getAccountManager
            return res.status(200).json({
                status:200,
                message: 'Select Successfully !!',
                data:dataGetAccountManager,
            })
        }
        catch(err){
            console.log(err);
            return res.status(404).json({
                status:404,
                errorMessage: 'Select Failure !!',
                err:err,
            })
        }
    }
    async Insert(req,res,next){
        const SqlInsert = "INSERT INTO account_manager (PhoneNumber,Password,RoleName) VALUES (?, ?, ?)";
        const PhoneNumber = req.body.PhoneNumber;
        const Password = req.body.Password;
        const RoleName = req.body.RoleName;
        const postAccountManager = new Promise((resolve, reject) => {
            DB.query(SqlInsert,[PhoneNumber, Password, RoleName], (err, result) => {
                if(err) {
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
        try{
            const dataPostAccountManager = await postAccountManager
            return res.status(200).json({
                status:200,
                message: 'Insert Successfully !!',
                data:dataPostAccountManager,
            })
        }
        catch(err){
            console.log(err);
            return res.status(404).json({
                status:404,
                errorMessage: 'Insert Failure !!',
                err:err,
            })
        }
    }
    async Delete(req,res,next){
        const SqlDelete = 'DELETE FROM account_manager WHERE account_manager.Id_Manager = ?';
        const IdManager = req.params.IdManager;
        const deleteAccountManager = new Promise((resolve, reject) => {
            DB.query(SqlDelete,IdManager, (err, result) => {
                if(err) {
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
        try{
            const dataDeleteAccountManager = await deleteAccountManager
            return res.status(200).json({
                status:200,
                message: 'Delete Successfully !!',
                data:dataDeleteAccountManager,
            })
        }
        catch(err){
            console.log(err);
            return res.status(404).json({
                status:404,
                errorMessage: 'Delete Failure !!',
                err:err,
            })
        }
    }
    async Update(req,res,next){
        const SqlUpdate = 'UPDATE account_manager SET PhoneNumber = ?, Password = ?, RoleName = ? WHERE account_manager.Id_Manager = ?'
        const IdManager = req.params.IdManager;
        const PhoneNumber = req.body.PhoneNumber;
        const Password = req.body.Password;
        const RoleName = req.body.RoleName;
        const putAccountManager = new Promise((resolve, reject) => {
            DB.query(SqlUpdate, [PhoneNumber, Password, RoleName, IdManager], (err, result) => {
                if(err) {
                    reject(err)
                }else{
                    resolve(result)
                }
            })
        })
        try{
            const dataPutAccountManager = await putAccountManager
            return res.status(200).json({
                status:200,
                message: 'Update Successfully !!',
                data:dataPutAccountManager,
            })
        }
        catch(err){
            console.log(err);
            return res.status(404).json({
                status:404,
                errorMessage: 'Update Failure !!',
                err:err,
            })
        }
    }
}
module.exports = new AccountManagerController;