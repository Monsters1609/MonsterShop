import {
    Add,
    Cart,
    ChartStatistical,
    DoneTableList,
    Error,
    Home,
    Introduce,
    Manager,
    ManagerLogin,
    ManagerRegister,
    ManagerSetting,
    Notification,
    Shop,
    TableList,
    Update,
    UserDetail,
    UserLogin,
    UserRegister,
    UserSetting
} from "../Pages/js"

const publicRouter = [
    {path:'/',page:Home,title:'Home'},
    {path:'/Cart',page:Cart,title:'Cart'},
    {path:'/Introduce',page:Introduce,title:'Introduce'},
    {path:'/Notification',page:Notification,title:'Notification'},
    {path:'/UserSetting',page:UserSetting,title:'UserSetting'},
    {path:'/Shop',page:Shop,title:'Shop'},
    {path:'/UserDetail',page:UserDetail,title:'UserDetail'},
    {path:'/UserLogin',page:UserLogin,title:'UserLogin'},
    {path:'/UserRegister',page:UserRegister,title:'UserRegister'},
    {path:'*',page:Error,title:'Error'}
]
const privateRouter = [
    {path:'/',page:Manager,title:'Manager'},
    {path:'/ManagerLogin',page:ManagerLogin,title:'ManagerLogin'},
    {path:'/ManagerRegister',page:ManagerRegister,title:'ManagerRegister'},
    {path:'/TableList',page:TableList,title:'TableList'},
    {path:'/Add',page:Add,title:'Add'},
    {path:'/Update',page:Update,title:'Update'},
    {path:'/ManagerSetting',page:ManagerSetting,title:'ManagerSetting'},
    {path:'/ChartStatistical',page:ChartStatistical,title:'ChartStatistical'},
    {path:'/DoneTableList',page:DoneTableList,title:'DoneTableList'},
    {path:'*',page:Error,title:'Error'}
]

export {
    publicRouter,
    privateRouter,
}