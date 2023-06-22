const DB = require('../Config');
class ManagerAccountController {
    async Select(req,res,next){
        const SqlSelect = 'SELECT * FROM manager_account';
        const getManagerAccount = new Promise((resolve, reject) => {
            DB.query(SqlSelect, (err, result) => {
                if(err) {
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
        try{
            const dataGetManagerAccount = await getManagerAccount
            return res.status(200).json({
                status:200,
                message: 'Select Successfully !!',
                data:dataGetManagerAccount,
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
        const SqlInsert = "INSERT INTO manager_account (PhoneNumber,Password,RoleName) VALUES (?, ?, ?)";
        const PhoneNumber = req.body.PhoneNumber;
        const Password = req.body.Password;
        const RoleName = req.body.RoleName;
        const postManagerAccount = new Promise((resolve, reject) => {
            DB.query(SqlInsert,[PhoneNumber, Password, RoleName], (err, result) => {
                if(err) {
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
        try{
            const dataPostManagerAccount = await postManagerAccount
            return res.status(200).json({
                status:200,
                message: 'Insert Successfully !!',
                data:dataPostManagerAccount,
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
        const SqlDeleteManagerAccount = 'DELETE FROM manager_account WHERE manager_account.PhoneNumber = ?';
        const SqlDeleteManagerDetail = 'DELETE FROM manager_detail WHERE manager_detail.PhoneNumber = ?';
        const PhoneNumber = req.params.PhoneNumber;
        const deleteManagerAccount = new Promise((resolve, reject) => {
            DB.query(SqlDeleteManagerAccount,PhoneNumber, (err, result) => {
                if(err) {
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
        const deleteManagerDetail = new Promise((resolve, reject) => {
            DB.query(SqlDeleteManagerDetail,PhoneNumber, (err, result) => {
                if(err) {
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
        try{
            const dataDeleteManagerAccount = await deleteManagerAccount
            const dataDeleteManagerDetail = await deleteManagerDetail
            return res.status(200).json({
                status:200,
                message: 'Delete Successfully !!',
                dataManagerAccount:dataDeleteManagerAccount,
                dataManagerDetail:dataDeleteManagerDetail,
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
        const SqlUpdate = 'UPDATE manager_account SET PhoneNumber = ?, Password = ?, RoleName = ? WHERE manager_account.Id_Manager = ?'
        const IdManager = req.params.IdManager;
        const PhoneNumber = req.body.PhoneNumber;
        const Password = req.body.Password;
        const RoleName = req.body.RoleName;
        const putManagerAccount = new Promise((resolve, reject) => {
            DB.query(SqlUpdate, [PhoneNumber, Password, RoleName, IdManager], (err, result) => {
                if(err) {
                    reject(err)
                }else{
                    resolve(result)
                }
            })
        })
        try{
            const dataPutManagerAccount = await putManagerAccount
            return res.status(200).json({
                status:200,
                message: 'Update Successfully !!',
                data:dataPutManagerAccount,
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
module.exports = new ManagerAccountController;