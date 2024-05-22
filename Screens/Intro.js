// import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
// import React from "react";
// import { useNavigation } from "@react-navigation/native";
// import { useEffect } from "react";
// import { useAuthContext } from "../Navigation/AuthContext";

// const Intro = () => {
// const { themeMode, setThemeMode } = useAuthContext();
//   const navigation = useNavigation();
//   useEffect(() => {
//     setTimeout(() => {
//       navigation.navigate("Home");
//     }, 1000);
//   }, []);
//   return (
//     <SafeAreaView style={[styles.container, themeMode == "dark" && { backgroundColor: "black" },]}>
//     <View style={styles.box}>
//      <Text style={styles.innerText}> 99 </Text>
//     </View>
//     <View style={styles.footer}>
//      <Text style={styles.outerText}> Names Of Allah </Text>
//     </View>
//   </SafeAreaView>
//   );
// };

// export default Intro;

// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     justifyContent: "center",
//     alignItems:"center",
   
//   },
//   box:{
//    flexDirection:"column",
//   justifyContent: "center",

//    backgroundColor:"#fcba03",
//    borderRadius:20,
//    height:130,
//    width:130,
//    alignItems:"center",
//    marginTop:280
//   },
// innerText:{ 
// textAlign:"center",
//  color:"#fff",
//  fontSize:50,
//  fontWeight:"500",
//  marginHorizontal:15,
// },
// footer:{
//   flex:1,
//   alignItems:"center",
//  marginTop:50
// },
// outerText:{
//   fontSize:35,
//   fontWeight:"500",
//   color:"#fcba03"
// }
// });
