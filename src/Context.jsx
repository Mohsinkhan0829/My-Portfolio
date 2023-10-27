import { createContext, useReducer } from "react";
import ToggleReducer from "./Reducer";

const ToggleContext = createContext()

export const ThemeProvider = ({children})=>{
    
    const initialstate = {
        darkMode : true
    }


const [state , dispatch] = useReducer(ToggleReducer , initialstate)


    return(
        <ToggleContext.Provider value={{state , dispatch}}>
            {children}
        </ToggleContext.Provider>
    )
}

export default ToggleContext;