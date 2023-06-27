import { request } from "../Data/API";

const addManagerAccount = async (dataHandleChange) => {
    await request.post('/ManagerDetail/postManagerDetail',{
        PhoneNumber:dataHandleChange.phonenumber, 
        FullName:dataHandleChange.fullname, 
        DateOfBirth:dataHandleChange.dateofbirth, 
        Gender:dataHandleChange.gender, 
        Email:dataHandleChange.email, 
        Address:dataHandleChange.address,
    })
    .then(
        alert('Create Information Manager Success')
    )
    .catch(err=>console.log(err))
    await request.post('/ManagerAccount/postManagerAccount',{
        PhoneNumber:dataHandleChange.phonenumber, 
        Password:dataHandleChange.password,
        RoleName:dataHandleChange.rolename,
    })
    .then(
        alert('Create Manager Account Success')
    )
    .catch(err=>console.log(err))
}

const deleteManagerAccount = (PhoneNumber) => {
    request.delete(`/ManagerAccount/deleteManagerAccount/${PhoneNumber}`)
    .then(()=>{
        alert('delete successful')
    })
    .catch(error => console.log(error));
}

const updateManagerAccount = (value) => {
    request.delete(`/ManagerAccount/putManagerAccount/${value.Id_ManagerAccount}`)
    .then(()=>{
        alert('delete successful')
    })
    .catch(error => console.log(error));
}

const handleSearchManager = (dataHandleChange,dataAll,TemporarySaveData,findManagerAccountfunc,findManagerDetailfunc) => {
    if(dataAll!==undefined){
        const findManagerAccount = dataAll.dataManagerAccount[0].find((value)=>value.PhoneNumber===dataHandleChange.searchManager)
         TemporarySaveData(findManagerAccountfunc(findManagerAccount))
        const findManagerDetail = dataAll.dataManagerDetail[0].find((value)=>value.PhoneNumber===findManagerAccount.PhoneNumber)
         TemporarySaveData(findManagerDetailfunc(findManagerDetail))
    }else{
        console.log('hien ko co du lieu');
    }
}
export {
    deleteManagerAccount,
    addManagerAccount,
    updateManagerAccount,
    handleSearchManager,
}