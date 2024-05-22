import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
// import Intro from "../Screens/Intro";
import Setting from "../Screens/Setting";
import MoreApps from "../Screens/MoreApps";
import TextScrol from "../Screens/TextScrol";
// import Introo from "../Screens/Introo";
const Stack = createNativeStackNavigator();
function AppStack() {
  return (
    <NavigationContainer >
         <Stack.Navigator screenOptions={{headerShown:false}}>
         {/* <Stack.Screen name="Intro" component={Intro} /> */}
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="TextScrol" component={TextScrol} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="MoreApps" component={MoreApps} />
        {/* <Stack.Screen name="Introo" component={Introo} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;