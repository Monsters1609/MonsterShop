const DB = require('../Config');
class ManagerDetailController {
    async Select(req,res,next){
        const SqlSelect = 'SELECT * FROM manager_detail';
        const getManagerDetail = new Promise((resolve, reject) => {
            DB.query(SqlSelect, (err, result) => {
                if(err) {
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
        try{
            const dataGetManagerDetail = await getManagerDetail
            return res.status(200).json({
                dataTableName:'Manager Detail',
                status:200,
                message: 'Select Successfully !!',
                data:dataGetManagerDetail,
            })
        }
        catch(err){
            console.log(err);
            return res.status(404).json({
                dataTableName:'Manager Detail',
                status:404,
                errorMessage: 'Select Failure !!',
                err:err,
            })
        }
    }
    async Insert(req,res,next){
        const SqlInsert = "INSERT INTO manager_detail (PhoneNumber, FullName, DateOfBirth, Gender, Email, Address) VALUES (?, ?, ?, ?, ?, ?)";
        const PhoneNumber = req.body.PhoneNumber;
        const FullName = req.body.FullName;
        const DateOfBirth = req.body.DateOfBirth;
        const Gender = req.body.Gender;
        const Email = req.body.Email;
        const Address = req.body.Address;
        const postManagerDetail = new Promise((resolve, reject) => {
            DB.query(SqlInsert,[PhoneNumber, FullName, DateOfBirth, Gender, Email, Address], (err, result) => {
                if(err) {
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
        try{
            const dataPostManagerDetail = await postManagerDetail
            return res.status(200).json({
                dataTableName:'Manager Detail',
                status:200,
                message: 'Insert Successfully !!',
                data:dataPostManagerDetail,
            })
        }
        catch(err){
            console.log(err);
            return res.status(404).json({
                dataTableName:'Manager Detail',
                status:404,
                errorMessage: 'Insert Failure !!',
                err:err,
            })
        }
    }
    // async Delete(req,res,next){
    //     const SqlDelete = 'DELETE FROM manager_detail WHERE manager_detail.PhoneNumber = ?';
    //     const PhoneNumber = req.params.PhoneNumber;
    //     const deleteManagerDetail = new Promise((resolve, reject) => {
    //         DB.query(SqlDelete,PhoneNumber, (err, result) => {
    //             if(err) {
    //                 reject(err);
    //             }else{
    //                 resolve(result);
    //             }
    //         })
    //     })
    //     try{
    //         const dataDeleteManagerDetail = await deleteManagerDetail
    //         return res.status(200).json({
    //             dataTableName:'Manager Detail',
    //             status:200,
    //             message: 'Delete Successfully !!',
    //             data:dataDeleteManagerDetail,
    //         })
    //     }
    //     catch(err){
    //         console.log(err);
    //         return res.status(404).json({
    //             dataTableName:'Manager Detail',
    //             status:404,
    //             errorMessage: 'Delete Failure !!',
    //             err:err,
    //         })
    //     }
    // }
    async Update(req,res,next){
        const SqlUpdate = 'UPDATE manager_detail SET FullName = ?, DateOfBirth = ?, Gender = ?, Email = ?, Address = ?, Img_Manager = ? WHERE manager_detail.PhoneNumber = ?'
        const PhoneNumber = req.body.PhoneNumber;
        const FullName = req.body.FullName;
        const DateOfBirth = req.body.DateOfBirth;
        const Gender = req.body.Gender;
        const Email = req.body.Email;
        const Address = req.body.Address;
        const ImgManager = req.body.Img_Manager;
        console.log('err',req.body);
        const putManagerDetail = new Promise((resolve, reject) => {
            DB.query(SqlUpdate, [FullName, DateOfBirth, Gender, Email, Address, ImgManager, PhoneNumber], (err, result) => {
                if(err) {
                    reject(err)
                }else{
                    resolve(result)
                }
            })
        })
        try{
            const dataPutManagerDetail = await putManagerDetail
            return res.status(200).json({
                dataTableName:'Manager Detail',
                status:200,
                message: 'Update Successfully !!',
                data:dataPutManagerDetail,
            })
        }
        catch(err){
            console.log('err',err);
            return res.status(404).json({
                dataTableName:'Manager Detail',
                status:404,
                errorMessage: 'Update Failure !!',
                err:err,
            })
        }
    }
}
module.exports = new ManagerDetailController;