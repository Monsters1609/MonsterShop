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
} from "./action";

const initDataAll = {
    dataManagerAccount:[],
    dataManagerRole:[],
    dataManagerDetail:[],
}

const initTemporarySaveData = {
    findManagerAccount:[],
    findManagerDetail:[],
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