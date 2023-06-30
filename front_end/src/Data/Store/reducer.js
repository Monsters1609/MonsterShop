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
} from "./action";

const initDataAll = {
    dataManagerAccount:[],
    dataManagerRole:[],
    dataManagerDetail:[],
}

const initTemporarySaveData = {
    findManagerAccount:[],
    findManagerDetail:[],
    newManagerDetail:[],
    newManagerAccount:[],
}

const initHandleChange = {
    fullname:'',
    dateofbirth:'',
    gender:'',
    email:'',
    phonenumber:'',
    address:'',
    password:'',
    rolename:'',
    searchManager:'',
    newFullname:'',
    newDateofbirth:'',
    newGender:'',
    newEmail:'',
    newPhonenumber:'',
    newAddress:'',
    newPassword:'',
    newRolename:'',
    newImgManager:'',
}

const reducerDataAll = (state,action) => {
    switch (action.type) {
        case CREATE_MANAGER_ACCOUNT:
            return{
                ...state,
                dataManagerAccount:[action.value],
            }
        case CREATE_MANAGER_DETAIL:
            return{
                ...state,
                dataManagerDetail:[action.value],
            }
        case CREATE_MANAGER_ROLE:
            return{
                ...state,
                dataManagerRole:[action.value],
            }
        default:
            throw new Error('Invailid , Error reducerDataAll');
    }
} 

const reducerTemporarySaveData = (state,action) => {
    switch(action.type){
        case FIND_MANAGER_ACCOUNT:
            return{
                ...state,
                findManagerAccount:[action.value]
            }
        case FIND_MANAGER_DETAIL:
            return{
                ...state,
                findManagerDetail:[action.value]
            }
        case UPDATE_MANAGER_ACCOUNT:
            return{
                ...state,
                newManagerAccount:[action.value]
            }
        case UPDATE_MANAGER_DETAIL:
            return{
                ...state,
                newManagerDetail:[action.value]
            }
        default:
            throw new Error('Invailid , Error reducerTemporarySaveData');
    }
}

const reducerHandleChange = (state,action) => {
    switch (action.type) {
        case SET_FULLNAME:
            return{
                ...state,
                fullname:action.value,
            } 
        case SET_DATEOFBIRTH:
            return{
                ...state,
                dateofbirth:action.value,
            } 
        case SET_GENDER:
            return{
                ...state,
                gender:action.value,
            } 
        case SET_EMAIL:
            return{
                ...state,
                email:action.value,
            } 
        case SET_PHONENUMBER:
            return{
                ...state,
                phonenumber:action.value,
            } 
        case SET_ADDRESS:
            return{
                ...state,
                address:action.value,
            } 
        case SET_PASSWORD:
            return{
                ...state,
                password:action.value,
            } 
        case SET_ROLENAME:
            return{
                ...state,
                rolename:action.value,
            } 
        case SEARCH_MANAGER:
            return{
                ...state,
                searchManager:action.value,
            } 
        case NEW_SET_FULLNAME:
            return{
                ...state,
                newFullname:action.value,
            } 
        case NEW_SET_DATEOFBIRTH:
            return{
                ...state,
                newDateofbirth:action.value,
            } 
        case NEW_SET_GENDER:
            return{
                ...state,
                newGender:action.value,
            } 
        case NEW_SET_EMAIL:
            return{
                ...state,
                newEmail:action.value,
            } 
        case NEW_SET_PHONENUMBER:
            return{
                ...state,
                newPhonenumber:action.value,
            } 
        case NEW_SET_ADDRESS:
            return{
                ...state,
                newAddress:action.value,
            } 
        case NEW_SET_PASSWORD:
            return{
                ...state,
                newPassword:action.value,
            } 
        case NEW_SET_ROLENAME:
            return{
                ...state,
                newRolename:action.value,
            }
        case NEW_SET_IMG_MANAGER:
            return{
                ...state,
                newImgManager:action.value,
            }
        default:
            throw new Error('Invailid , Error reducerHandleChange');
    }
}
export{
    initDataAll,
    initTemporarySaveData,
    initHandleChange,
    reducerDataAll,
    reducerTemporarySaveData,
    reducerHandleChange,
}