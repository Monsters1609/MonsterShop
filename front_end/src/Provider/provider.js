import { createContext, useReducer } from "react";
import { 
    initDataAll, 
    initHandleChange,
    initTemporarySaveData,
    reducerDataAll,
    reducerHandleChange, 
    reducerTemporarySaveData
} from "../Data/Store";

const ProviderDataAll = createContext();
const ProviderTemporarySave = createContext();
const ProviderHandleChange = createContext();

function ProviderApp({children}) {
    
    const [dataAll, DataAll] = useReducer(reducerDataAll, initDataAll);
    const [temporarySaveData, TemporarySaveData] = useReducer(reducerTemporarySaveData, initTemporarySaveData);
    const [dataHandleChange, DataHandleChange] = useReducer(reducerHandleChange, initHandleChange);
    return (
        <ProviderDataAll.Provider value={[dataAll, DataAll]}>
            <ProviderTemporarySave.Provider value={[temporarySaveData, TemporarySaveData]}>
                <ProviderHandleChange.Provider value={[dataHandleChange, DataHandleChange]}>
                    {children}
                </ProviderHandleChange.Provider>
            </ProviderTemporarySave.Provider>
        </ProviderDataAll.Provider>
    )
};
export {
    ProviderDataAll,
    ProviderTemporarySave,
    ProviderHandleChange
};
export default ProviderApp;
