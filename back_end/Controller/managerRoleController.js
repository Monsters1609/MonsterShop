const DB = require('../Config');
class ManagerRoleController {
    async Select(req,res,next){
        const SqlSelect = 'SELECT * FROM manager_role';
        const getManagerRole = new Promise((resolve, reject) => {
            DB.query(SqlSelect, (err, result) => {
                if(err) {
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
        try{
            const dataGetManagerRole = await getManagerRole
            return res.status(200).json({
                status:200,
                message: 'Select Successfully !!',
                data:dataGetManagerRole,
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
        const SqlInsert = "INSERT INTO manager_role (RoleName, Describe_Role, Code_Role) VALUES (?, ?, ?)";
        const RoleName = req.body.RoleName;
        const DescribeRole = req.body.DescribeRole;
        const CodeRole = req.body.CodeRole;
        const postManagerRole = new Promise((resolve, reject) => {
            DB.query(SqlInsert,[RoleName, DescribeRole, CodeRole], (err, result) => {
                if(err) {
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
        try{
            const dataPostManagerRole = await postManagerRole
            return res.status(200).json({
                status:200,
                message: 'Insert Successfully !!',
                data:dataPostManagerRole,
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
        const SqlDelete = 'DELETE FROM manager_role WHERE manager_role.Id_Role = ?';
        const IdRole = req.params.IdRole;
        const deleteManagerRole = new Promise((resolve, reject) => {
            DB.query(SqlDelete,IdRole, (err, result) => {
                if(err) {
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
        try{
            const dataDeleteManagerRole = await deleteManagerRole
            return res.status(200).json({
                status:200,
                message: 'Delete Successfully !!',
                data:dataDeleteManagerRole,
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
        const SqlUpdate = 'UPDATE manager_role SET RoleName = ?, Describe_Role = ?, Code_Role = ? WHERE manager_role.Id_Role = ?'
        const RoleName = req.body.RoleName;
        const DescribeRole = req.body.DescribeRole;
        const CodeRole = req.body.CodeRole;
        const IdRole = req.params.IdRole;
        const putManagerRole = new Promise((resolve, reject) => {
            DB.query(SqlUpdate, [RoleName, DescribeRole, CodeRole, IdRole], (err, result) => {
                if(err) {
                    reject(err)
                }else{
                    resolve(result)
                }
            })
        })
        try{
            const dataPutManagerRole = await putManagerRole
            return res.status(200).json({
                status:200,
                message: 'Update Successfully !!',
                data:dataPutManagerRole,
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
module.exports = new ManagerRoleController;