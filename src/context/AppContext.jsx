import { createContext, useContext } from "react"

const AppContext = createContext()

export const AppProvider = ({ children }) => {

    const store = {
        
    }
    
    return (
        <AppContext.Provider value={store}>
            {children}
        </AppContext.Provider>
    )
}


export const useStore = () => useContext(AppContext)