import clsx from 'clsx';
import style from '../css/update.module.css';
import { useContextHandleChange, useContextTemporarySave } from '../../Hooks';
import { handleUpdateManagerDetail } from '../../Handle';
import { setNewAddress, setNewDateOfBirth, setNewEmail, setNewFullName, setNewGender, setNewImgManager } from '../../Data/Store';
import { useNavigate } from 'react-router-dom';

function UpdateManager() {
    const [dataHandleChange, DataHandleChange] = useContextHandleChange();
    const [temporarySaveData, TemporarySaveData] = useContextTemporarySave();
    const navigate = useNavigate()
    return(
        <div className={clsx(style.UpdateManager)}>
            <form>
                <h1>Update Manager Detail</h1>
                <label htmlFor="PhoneNumber">PhoneNumber </label>
                <input type="text" name="PhoneNumber" value={temporarySaveData.newManagerDetail[0].PhoneNumber} onChange={()=>{}}/><br/>
                <label htmlFor="FullName">FullName </label>
                <input type="text" name="FullName" value={dataHandleChange.newFullname ?? temporarySaveData.newManagerDetail[0].FullName} onChange={(e)=>DataHandleChange(setNewFullName(e.target.value ?? temporarySaveData.newManagerDetail[0].FullName))}/><br/>
                <label htmlFor="DateOfBirth">DateOfBirth </label>
                <input type="date" name="DateOfBirth" value={dataHandleChange.newDateofbirth} onChange={(e)=>DataHandleChange(setNewDateOfBirth(e.target.value))}/><br/>
                <label htmlFor="Gender">Gender </label>
                <select id="Gender" defaultValue={''} onChange={(e)=>DataHandleChange(setNewGender(e.target.value))}>
                    <option value="" disabled>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select><br/>
                <label htmlFor="Email">Email </label>
                <input type="text" name="Email" value={dataHandleChange.newEmail ?? temporarySaveData.newManagerDetail[0].Email} onChange={(e)=>DataHandleChange(setNewEmail(e.target.value ?? temporarySaveData.newManagerDetail[0].Email))}/><br/>
                <label htmlFor="Address">Address </label>
                <input type="text" name="Address" value={dataHandleChange.newAddress ?? temporarySaveData.newManagerDetail[0].Address} onChange={(e)=>DataHandleChange(setNewAddress(e.target.value ?? temporarySaveData.newManagerDetail[0].Address))}/><br/>
                <label htmlFor="ImgManager">Img Manager (Link Img) : </label>
                <input type="text" name="ImgManager" value={dataHandleChange.newImgManager ?? temporarySaveData.newManagerDetail[0].Img_Manager!==null?temporarySaveData.newManagerDetail[0].Img_Manager:'https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'} onChange={(e)=>DataHandleChange(setNewImgManager(e.target.value))}/><br/>
                <button type="button" onClick={()=>handleUpdateManagerDetail(dataHandleChange,navigate,temporarySaveData)}>Submit</button>
            </form>
        </div>
    )
}

export default UpdateManager;