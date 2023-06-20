import clsx from 'clsx';
import style from './App.module.css'
import RouterApp from './Router/router';
function App () {
    return(
        <div className={clsx(style.App)}>
            <RouterApp/>
        </div>
    )
}
export default App;