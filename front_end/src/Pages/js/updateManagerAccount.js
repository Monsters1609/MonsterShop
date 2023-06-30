import clsx from 'clsx';
import style from '../css/updateManagerAccount.module.css';
import { useContextHandleChange, useContextTemporarySave } from '../../Hooks';
import { handleUpdateManagerAccount } from '../../Handle';
import { setNewPassword, setNewRoleName } from '../../Data/Store';
import { useNavigate } from 'react-router-dom';
function UpdateManagerAccount () {
    const [dataHandleChange, DataHandleChange] = useContextHandleChange();
    const [temporarySaveData, TemporarySaveData] = useContextTemporarySave();
    const navigate = useNavigate()
    return(
        <div className={clsx(style.UpdateManagerAccount)}>
            <form>
                <h1>Update Manager Account</h1>
                <label htmlFor="PhoneNumber">PhoneNumber </label>
                <input type="text" name="PhoneNumber" value={temporarySaveData.newManagerAccount[0].PhoneNumber} onChange={()=>{}}/><br/>
                <label htmlFor="Password">Password</label>
                <input type="text" name="Password" value={dataHandleChange.newPassword} onChange={(e)=>{DataHandleChange(setNewPassword(e.target.value))}}/><br/>
                <label htmlFor="RoleName">RoleName</label>
                <select id="RoleName" defaultValue={''} onChange={(e)=>{DataHandleChange(setNewRoleName(e.target.value))}}>
                    <option value="" disabled>Select Role</option>
                    <option value="Admin">Admin</option>
                    <option value="Personnel">Personnel</option>
                </select><br/>
                <button type="button" onClick={()=>handleUpdateManagerAccount(dataHandleChange,navigate,temporarySaveData)}>Submit</button>
            </form>
        </div>
    )
}
export default UpdateManagerAccount;