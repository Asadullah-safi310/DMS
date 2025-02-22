import { createContext, ReactNode } from "react"
import { doctors } from "../assets/assets"
import { DoctorsList } from "../Types/AllTypes";

interface AppContextProviderProps {
    children: ReactNode;
}
export const AppContext = createContext<DoctorsList>(doctors);

const AppContextProvider:React.FC<AppContextProviderProps> = ({children})=>{
    
    return (
        <AppContext.Provider value={doctors}>
            { children }   
        </AppContext.Provider>
    )

}

export default AppContextProvider;

