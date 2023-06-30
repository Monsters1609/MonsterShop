import clsx from 'clsx';
import style from '../css/managerRegister.module.css';
import { useContextHandleChange} from '../../Hooks';
import { addManagerAccount } from '../../Handle';
import { 
    setAddress, 
    setDateOfBirth, 
    setEmail, 
    setFullName, 
    setGender, 
    setPassword, 
    setPhoneNumber, 
    setRoleName 
} from '../../Data/Store';
import { useEffect } from 'react';

function ManagerRegister() {
    const [dataHandleChange, DataHandleChange] = useContextHandleChange();
    const localStorageManagerAccount = JSON.parse(localStorage.getItem('ManagerAccount'))
    useEffect(()=>{
        
        console.log(localStorageManagerAccount[0]);
    },[])
    return(
        <div className={clsx(style.ManagerRegister)}>
            <form>
                <h1>Register</h1>
                <label htmlFor="PhoneNumber">PhoneNumber</label>
                <input type="text" name="PhoneNumber" value={dataHandleChange.phonenumber} onChange={(e)=>DataHandleChange(setPhoneNumber(e.target.value))}/><br/>
                <p className={clsx(style.NotificationLoop,'NotificationLoop')}></p>
                <label htmlFor="Password">Password</label>
                <input type="text" name="Password" value={dataHandleChange.password} onChange={(e)=>DataHandleChange(setPassword(e.target.value))}/><br/>
                <label htmlFor="RoleName">RoleName</label>
                <select id="RoleName" defaultValue={''} onChange={(e)=>DataHandleChange(setRoleName(e.target.value))}>
                    <option value="" disabled>Select Role</option>
                    <option value="Admin">Admin</option>
                    <option value="Personnel">Personnel</option>
                </select><br/>
                <label htmlFor="FullName">FullName</label>
                <input type="text" name="FullName" value={dataHandleChange.fullname} onChange={(e)=>DataHandleChange(setFullName(e.target.value))}/><br/>
                <label htmlFor="DateOfBirth">DateOfBirth</label>
                <input type="date" name="DateOfBirth" value={dataHandleChange.dateofbirth} onChange={(e)=>DataHandleChange(setDateOfBirth(e.target.value))}/><br/>
                <label htmlFor="Gender">Gender</label>
                <select id="Gender" defaultValue={''} onChange={(e)=>DataHandleChange(setGender(e.target.value))}>
                    <option value="" disabled>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select><br/>
                <label htmlFor="Email">Email</label>
                <input type="text" name="Email" value={dataHandleChange.email} onChange={(e)=>DataHandleChange(setEmail(e.target.value))}/><br/>
                <label htmlFor="Address">Address</label>
                <input type="text" name="Address" value={dataHandleChange.address} onChange={(e)=>DataHandleChange(setAddress(e.target.value))}/><br/>
                <button type="submit" onClick={()=>addManagerAccount(dataHandleChange,localStorageManagerAccount)}>Submit</button>
            </form>
        </div>
    )
}
export default ManagerRegister;