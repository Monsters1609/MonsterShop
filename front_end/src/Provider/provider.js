import { createContext, useReducer } from "react";
import { 
    initDataAll, 
    initHandleChange,
    initTemporarySaveData,
    reducerDataAll,
    reducerHandleChange, 
    reducerTemporarySaveData
} from "../Data/Store";

function ProviderApp({children}) {
    const ProviderDataAll = createContext();
    const ProviderTemporarySave = createContext()
    const ProviderHandleChange = createContext();
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
}
export default ProviderApp;