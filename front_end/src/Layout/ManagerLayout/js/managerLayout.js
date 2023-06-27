import clsx from 'clsx';
import style from '../css/managerLayout.module.css'
import ManagerHeader from './managerHeader';
import ManagerNavbarMain from './managerNavbarMain';
import ManagerNavbarSub from './managerNavbarSub';
import ManagerContainer from './managerContainer';
import ManagerFooter from './managerFooter';
function ManagerLayout({children}) {
    return(
        <div className={clsx(style.ManagerLayout)}>
            <div className={clsx(style.LeftManagerLayout)}>
                <ManagerNavbarMain/>
                <ManagerNavbarSub/>
            </div>
            <div className={clsx(style.RightManagerLayout)}>
                <ManagerHeader/>
                <ManagerContainer children={children}/>
                <ManagerFooter/>
            </div>
        </div>
    )
}
export default ManagerLayout;