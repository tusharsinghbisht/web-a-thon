import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [tabs, setTabs] = useState([]);
  const [loading, setLoading] = useState(true);

  const store = {
    tabs,
    setTabs,
    loading,
    setLoading,
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  });

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export const useStore = () => useContext(AppContext);
