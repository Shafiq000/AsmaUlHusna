import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import React,{useEffect} from "react";
import AppStack from "./Navigation/AppStack";
import AuthContextProvider from "./Navigation/AuthContext";
export default function App() {
 

useEffect(() => {
    async function prepare() {

      try {
        await Font.loadAsync({
          Inter: require("./assets/fonts/Inter-Regular.ttf"),
          Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
          RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
          OpenSansLight: require("./assets/fonts/OpenSans-Light.ttf"),
          "Open Sans": require("./assets/fonts/OpenSans-Regular.ttf"),
          OpenSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
          Gilroy: require("./assets/fonts/Gilroy-Light.otf"),
          Montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),
          Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
          Silkscreen: require("./assets/fonts/Silkscreen-Regular.ttf"),
        });

      } catch (e) {
        console.warn(e);
      } 
    }
    prepare();
  }, []);
  return (
    <> 
     <AuthContextProvider>
      <StatusBar
        headerTintColor="white"
        backgroundColor="#fcba03"
        translucent={false}
      />

      <AppStack />
    </AuthContextProvider>
    </>
  );
}
