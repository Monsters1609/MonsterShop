import { 
    CREATE_MANAGER_ACCOUNT, 
    CREATE_MANAGER_DETAIL, 
    CREATE_MANAGER_ROLE,
    FIND_MANAGER_ACCOUNT,
    FIND_MANAGER_DETAIL,
    NEW_SET_ADDRESS,
    NEW_SET_DATEOFBIRTH,
    NEW_SET_EMAIL,
    NEW_SET_FULLNAME,
    NEW_SET_GENDER,
    NEW_SET_IMG_MANAGER,
    NEW_SET_PASSWORD,
    NEW_SET_PHONENUMBER,
    NEW_SET_ROLENAME,
    SEARCH_MANAGER,
    SET_ADDRESS,
    SET_DATEOFBIRTH,
    SET_EMAIL,
    SET_FULLNAME,
    SET_GENDER,
    SET_PASSWORD,
    SET_PHONENUMBER,
    SET_ROLENAME,
    UPDATE_MANAGER_ACCOUNT,
    UPDATE_MANAGER_DETAIL,
} from "./action"

const addManagerAccount = (value) => {
    return{
        type:CREATE_MANAGER_ACCOUNT,
        value
    }
}


const addManagerDetail = (value) => {
    return{
        type:CREATE_MANAGER_DETAIL,
        value
    }
}

const addManagerRole = (value) => {
    return{
        type:CREATE_MANAGER_ROLE,
        value
    }
}

const setFullName = (value) => {
    return{
        type:SET_FULLNAME,
        value
    }
}

const setDateOfBirth = (value) => {
    return{
        type:SET_DATEOFBIRTH,
        value
    }
}
const setGender = (value) => {
    return{
        type:SET_GENDER,
        value
    }
}
const setEmail = (value) => {
    return{
        type:SET_EMAIL,
        value
    }
}
const setPhoneNumber = (value) => {
    return{
        type:SET_PHONENUMBER,
        value
    }
}
const setAddress = (value) => {
    return{
        type:SET_ADDRESS,
        value
    }
}
const setPassword = (value) => {
    return{
        type:SET_PASSWORD,
        value
    }
}
const setRoleName = (value) => {
    return{
        type:SET_ROLENAME,
        value
    }
}

const searchManager = (value) => {
    return{
        type:SEARCH_MANAGER,
        value
    }
}

const findManagerAccountfunc = value => {
    return{
        type:FIND_MANAGER_ACCOUNT,
        value
    }
}

const findManagerDetailfunc = value => {
    return{
        type:FIND_MANAGER_DETAIL,
        value
    }
}

const updateManagerAccount = (value) =>{
    return{
        type:UPDATE_MANAGER_ACCOUNT,
        value
    }
}

const updateManagerDetail = (value) => {
    return{
        type:UPDATE_MANAGER_DETAIL,
        value
    }
}

const setNewFullName = (value) => {
    return{
        type:NEW_SET_FULLNAME,
        value
    }
}

const setNewDateOfBirth = (value) => {
    return{
        type:NEW_SET_DATEOFBIRTH,
        value
    }
}
const setNewGender = (value) => {
    return{
        type:NEW_SET_GENDER,
        value
    }
}
const setNewEmail = (value) => {
    return{
        type:NEW_SET_EMAIL,
        value
    }
}
const setNewPhoneNumber = (value) => {
    return{
        type:NEW_SET_PHONENUMBER,
        value
    }
}
const setNewAddress = (value) => {
    return{
        type:NEW_SET_ADDRESS,
        value
    }
}
const setNewPassword = (value) => {
    return{
        type:NEW_SET_PASSWORD,
        value
    }
}
const setNewRoleName = (value) => {
    return{
        type:NEW_SET_ROLENAME,
        value
    }
}
const setNewImgManager = (value) => {
    return{
        type:NEW_SET_IMG_MANAGER,
        value
    }
}
export {
    addManagerAccount,
    addManagerDetail,
    addManagerRole,
    setFullName,
    setDateOfBirth,
    setGender,
    setEmail,
    setPhoneNumber,
    setAddress,
    setPassword,
    setRoleName,
    searchManager,
    findManagerAccountfunc,
    findManagerDetailfunc,
    updateManagerAccount,
    updateManagerDetail,
    setNewFullName,
    setNewDateOfBirth,
    setNewGender,
    setNewEmail,
    setNewPhoneNumber,
    setNewAddress,
    setNewPassword,
    setNewRoleName,
    setNewImgManager,
}