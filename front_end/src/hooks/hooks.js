import { useContext } from "react";
import { 
    ProviderDataAll, 
    ProviderHandleChange, 
    ProviderTemporarySave 
} from "../Provider/provider";

const useContextDataAll = () => {
    const [dataAll, DataAll] = useContext(ProviderDataAll);
    return [dataAll, DataAll];
}

const useContextTemporarySave = () => {
    const [temporarySaveData, TemporarySaveData] = useContext(ProviderTemporarySave);
    return [temporarySaveData, TemporarySaveData];
}

const useContextHandleChange = () => {
    const [dataHandleChange, DataHandleChange] = useContext(ProviderHandleChange);
    return [dataHandleChange, DataHandleChange];
}

export {
    useContextDataAll,
    useContextTemporarySave,
    useContextHandleChange,
}