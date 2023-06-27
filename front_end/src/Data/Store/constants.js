import { 
    CREATE_MANAGER_ACCOUNT, 
    CREATE_MANAGER_DETAIL, 
    CREATE_MANAGER_ROLE,
    FIND_MANAGER_ACCOUNT,
    FIND_MANAGER_DETAIL,
    SEARCH_MANAGER,
    SET_ADDRESS,
    SET_DATEOFBIRTH,
    SET_EMAIL,
    SET_FULLNAME,
    SET_GENDER,
    SET_PASSWORD,
    SET_PHONENUMBER,
    SET_ROLENAME,
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
}