import { request } from "../Data/API";

const addManagerAccount = async (dataHandleChange,localStorageManagerAccount) => {
    const checkPhoneNumberManagerAccount  = localStorageManagerAccount.find(value=>{
        console.log(value.PhoneNumber===dataHandleChange.phonenumber);
        return value.PhoneNumber===dataHandleChange.phonenumber
    })
    if(!checkPhoneNumberManagerAccount){
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
    }else{
        alert('Số điện thoại đã tồn tại . Xin vui lòng nhập lại ')
    }
}

const deleteManagerAccount = (PhoneNumber) => {
    request.delete(`/ManagerAccount/deleteManagerAccount/${PhoneNumber}`)
    .then(()=>{
        alert('delete successful')
    })
    .catch(error => console.log(error));
}

const handleSendDataManagerAccount = async (value,navigate,TemporarySaveData,updateManagerAccount) => {
    await TemporarySaveData(updateManagerAccount(value))
    await navigate('/UpdateManagerAccount')
} 

const handleUpdateManagerAccount = (dataHandleChange,navigate,temporarySaveData) => {
    request.put(`/ManagerAccount/putManagerAccount/${temporarySaveData.newManagerAccount[0].Id_Manager}`,{
        IdManager:temporarySaveData.newManagerAccount[0].Id_Manager,
        PhoneNumber:temporarySaveData.newManagerAccount[0].PhoneNumber,
        Password:dataHandleChange.newPassword,
        RoleName:dataHandleChange.newRolename,
    })
    .then(()=>{
        alert('Update Manager Account successfully!!')
        navigate('/tableList')
    })
    .catch(err=>console.log(err))
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

const handleSendDataManagerDetail = async (TemporarySaveData,value,updateManagerDetail,navigate) => {
    await TemporarySaveData(updateManagerDetail(value))
    await navigate('/UpdateManager')
}

const handleUpdateManagerDetail = (dataHandleChange,navigate,temporarySaveData) => {
    request.put(`/ManagerDetail/putManagerDetail/${temporarySaveData.newManagerDetail[0].PhoneNumber}`,{
        PhoneNumber:temporarySaveData.newManagerDetail[0].PhoneNumber, 
        FullName:dataHandleChange.newFullname, 
        DateOfBirth:dataHandleChange.newDateofbirth, 
        Gender:dataHandleChange.newGender, 
        Email:dataHandleChange.newEmail, 
        Address:dataHandleChange.newAddress,
        Img_Manager:dataHandleChange.newImgManager,
    })
    .then(()=>{
        alert('Update successful')
        navigate('/tableList')
    })
    .catch(error => console.log(error));
}
export {
    deleteManagerAccount,
    addManagerAccount,
    handleSendDataManagerAccount,
    handleSearchManager,
    handleSendDataManagerDetail,
    handleUpdateManagerDetail,
    handleUpdateManagerAccount,
}