import React, { createContext, useState, useEffect, useContext } from "react";
import { Appearance } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const authContext = createContext(null);
export const useAuthContext = () => useContext(authContext);
const authContextProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(Appearance.getColorScheme());
  const [isAutoPlayActive,setIsAutoPlayActive]=useState()
  useEffect(() => {
    (async () => {
      const theme = await AsyncStorage.getItem("colorScheme").catch(
        (error) => {}
      );
      if (theme) {
        setThemeMode(theme);
        return;
      }
      const AppearanceMode = Appearance.getColorScheme();
      if (AppearanceMode !== null) {
        setThemeMode(AppearanceMode);
        return;
      }
      setThemeMode("light");
      return;
    })();
  }, []);

  const value = {
    themeMode,
    setThemeMode,
    isAutoPlayActive,
    setIsAutoPlayActive
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default authContextProvider;
