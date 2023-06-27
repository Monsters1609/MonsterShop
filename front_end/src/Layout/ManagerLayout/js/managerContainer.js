import clsx from 'clsx';
import style from '../css/managerContainer.module.css'
function ManagerContainer({children}) {
    return(
        <div className={clsx(style.ManagerContainer)}>
            {children}
        </div>
    )
}
export default ManagerContainer;