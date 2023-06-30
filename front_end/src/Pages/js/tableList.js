import clsx from 'clsx';
import style from '../css/tableList.module.css';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import { request } from '../../Data/API';
import { useContextDataAll, useContextHandleChange, useContextTemporarySave } from '../../Hooks';
import { addManagerAccount, addManagerDetail, findManagerAccountfunc, findManagerDetailfunc, searchManager, updateManagerAccount, updateManagerDetail} from '../../Data/Store';
import { deleteManagerAccount, handleSearchManager, handleSendDataManagerAccount, handleSendDataManagerDetail} from '../../Handle';

function TableList() {
    const [dataHandleChange, DataHandleChange] = useContextHandleChange();
    const [dataAll, DataAll] = useContextDataAll();
    const [temporarySaveData, TemporarySaveData] = useContextTemporarySave();
    const navigate = useNavigate(); //đây là hook của react-router-dom : dùng để điều hướng cho các button,....
    useEffect(() => {
        request.get('/ManagerAccount/getManagerAccount')
        .then(data => {
            const jsonStrManagerAccount = JSON.stringify(data.data.data)
            localStorage.setItem('ManagerAccount',jsonStrManagerAccount)
            DataAll(addManagerAccount(data.data.data))
        })
        .catch(err=>console.log(err))
        request.get('/ManagerDetail/getManagerDetail')
        .then(data=> DataAll(addManagerDetail(data.data.data)))
        .catch(err=>console.log(err))
    },[]);
    console.log(dataAll);
    return(
        <div className={clsx(style.TableList)} style={{textAlign:'center'}}>
            <div className={clsx(style.BoxSearch)}>
                <form>
                    <input type="search" name="" value={dataHandleChange.searchManager} placeholder='... Search Phone Number ...' style={{width:'250px'}} onChange={(e)=>{DataHandleChange(searchManager(e.target.value))}}/>
                    <button type="button" onClick={()=>handleSearchManager(dataHandleChange,dataAll,TemporarySaveData,findManagerAccountfunc,findManagerDetailfunc)}>Search</button>
                </form>
                <div>
                    {temporarySaveData.findManagerAccount.map((value,index) => {
                        return(
                            <ul key={index} style={{display:'flex',listStyle:'none',alignItems:'center'}}>
                                <li style={{marginLeft:'30px'}}>{value.PhoneNumber}</li>
                                <li style={{marginLeft:'30px'}}>{value.Password}</li>
                                <li style={{marginLeft:'30px'}}>{value.RoleName}</li>
                                <li style={{marginLeft:'30px'}}>
                                    <button type="button" onClick={()=>deleteManagerAccount(value.PhoneNumber)}>Delete</button>
                                </li>
                            </ul>
                        )
                    })}
                    {temporarySaveData.findManagerDetail.map((value,index) => {
                        return(
                            <ul key={index} style={{display:'flex',listStyle:'none',alignItems:'center'}}>
                                <li style={{marginLeft:'30px'}}>{value.PhoneNumber}</li>
                                <li style={{marginLeft:'30px'}}>{value.FullName}</li>
                                <li style={{marginLeft:'30px'}}>{value.DateOfBirth}</li>
                                <li style={{marginLeft:'30px'}}>{value.Gender}</li>
                                <li style={{marginLeft:'30px'}}>{value.Email}</li>
                                <li style={{marginLeft:'30px'}}>{value.Address}</li>
                            </ul>
                        )
                    })}
                </div>
            </div>
            
            <table cellPadding={'50'} width={'700'}>
                <caption style={{textAlign:'center',captionSide:'top'}}>
                    <h2>Table Manager Account</h2>
                </caption>
                <thead>
                    <tr style={{textAlign:'center'}}>
                        <th>Stt</th>
                        <th>Id_Manager</th>
                        <th>PhoneNumber</th>
                        <th>Password</th>
                        <th>RoleName</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody style={{overflowY:'scroll'}}>
                    {console.log(dataAll.dataManagerAccount[0])}
                    {dataAll.dataManagerAccount[0]!==undefined?dataAll.dataManagerAccount[0].map((value,index)=>{
                        return(
                            <tr key={index} style={{textAlign:'center'}}>
                                <td>{index+1}</td>
                                <td>{value.Id_Manager}</td>
                                <td>{value.PhoneNumber}</td>
                                <td>{value.Password}</td>
                                <td>{value.RoleName}</td>
                                <td>
                                    <button type="submit" onClick={()=>deleteManagerAccount(value.PhoneNumber)}>Delete</button>
                                </td>
                                <td>
                                    <button type="submit" onClick={()=>handleSendDataManagerAccount(value,navigate,TemporarySaveData,updateManagerAccount)}>Update</button>
                                </td>
                            </tr>
                        )
                    }):console.log('undefined dataAll.dataManagerAccount')}
                </tbody> 
            </table>
            <table cellPadding={'50'} width={'1000'}>
            <caption style={{textAlign:'center',captionSide:'top'}}>
                <h2>Table Manager Detail</h2>
            </caption>
            <thead>
                <tr style={{textAlign:'center'}}>
                    <th>Stt</th>
                    <th>Fullname</th>
                    <th>DateOfBirth</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>PhoneNumber</th>
                    <th>Address</th>
                    <th>Img_Manager</th>
                    <th>Update</th>
                </tr>
            </thead>
            <tbody style={{overflowY:'scroll'}}>
                {console.log(dataAll.dataManagerDetail[0])}
                {dataAll.dataManagerDetail[0]!==undefined?dataAll.dataManagerDetail[0].map((value,index)=>{
                    return(
                        <tr key={index} style={{textAlign:'center'}}>
                            <td>{index+1}</td>
                            <td>{value.FullName}</td>
                            <td>{value.DateOfBirth}</td>
                            <td>{value.Gender}</td>
                            <td>{value.Email}</td>
                            <td>{value.PhoneNumber}</td>
                            <td>{value.Address}</td>
                            <td><img src={value.Img_Manager!==null?value.Img_Manager:'https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'} alt="" width={'50px'} height={'50px'}/></td>
                            <td>
                                <button type="submit" onClick={()=>handleSendDataManagerDetail(TemporarySaveData,value,updateManagerDetail,navigate)}>Update</button>
                            </td>
                        </tr>
                    )
                }):console.log('undefined dataAll.dataManagerAccount')}
            </tbody> 
        </table>
        </div>
        
    )
}
export default TableList;