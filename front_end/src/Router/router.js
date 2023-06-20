import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { privateRouter, publicRouter } from './path';
import { DL } from '../Layout/DefaultLayout/js';
import { ML } from '../Layout/ManagerLayout/js';
function RouterApp() {
    return(
        <Router>
            <Routes>
                {
                    publicRouter.map((value,index) => {
                        const Page = value.page;
                        const Layout = value.layout ?? DL
                        // DL : Default layout 
                        return(
                            <Route key={index} path={value.path} element={
                                <Layout>
                                    <Page/>
                                </Layout>
                            }></Route>
                        )
                    })
                }
                {
                    privateRouter.map((value,index) => {
                        const Page = value.page;
                        const Layout = value.layout ?? ML
                        // ML : Manager Layout
                        return(
                            <Route key={index} path={value.path} element={
                                <Layout>
                                    <Page/>
                                </Layout>
                            }></Route>
                        )
                    })
                }
            </Routes>
        </Router>
    )
}
export default RouterApp;