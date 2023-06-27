import clsx from 'clsx';
import {useNavigate} from 'react-router-dom'
import style from '../css/managerLogin.module.css';

function ManagerLogin() {
    const navigate = useNavigate()
    return(
        <div className={clsx(style.ManagerLogin)}>
            <form>
                <h1>login</h1>
                <label htmlFor="PhoneNumber">PhoneNumber</label>
                <input type="text" name="PhoneNumber" value=""/>
                <label htmlFor="Password">Password</label>
                <input type="text" name="Password" value=""/>
                <button type="submit">login</button>
            </form>
        </div>
    )
}
export default ManagerLogin;