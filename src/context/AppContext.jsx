import { createContext, useContext, useState } from "react"

const AppContext = createContext()

export const AppProvider = ({ children }) => {

    const [tabs, setTabs] = useState([])

    const store = {
        tabs, setTabs
    }

    return (
        <AppContext.Provider value={store}>
            {children}
        </AppContext.Provider>
    )
}


export const useStore = () => useContext(AppContext)