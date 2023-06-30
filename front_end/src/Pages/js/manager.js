import clsx from 'clsx';
import style from '../css/manager.module.css';
import { useContextDataAll } from '../../Hooks';

function Manager() {
    
    const [dataAll, DataAll] = useContextDataAll();
    console.log(dataAll);
    return(
        <div className={clsx(style.Manager)}>
            
        </div>
    )
}
export default Manager;