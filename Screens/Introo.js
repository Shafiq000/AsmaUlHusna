import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React, { useState } from "react";
import { useAuthContext } from "../Navigation/AuthContext";

const Introo = ({}) => {
  const { themeMode, setThemeMode } = useAuthContext();
  return (
    <SafeAreaView style={[styles.container, themeMode == "dark" && { backgroundColor: "black" },]}>
    <View style={styles.box}>
     <Text style={styles.innerText}> 99 </Text>
    </View>
    <View style={styles.footer}>
     <Text style={styles.outerText}> Names Of Allah </Text>
    </View>
  </SafeAreaView>
  )
}

export default Introo

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems:"center",
       
      },
      box:{
       flexDirection:"column",
      justifyContent: "center",
   
       backgroundColor:"#fcba03",
       borderRadius:20,
       height:130,
       width:130,
       alignItems:"center",
       marginTop:280
      },
    innerText:{ 
    textAlign:"center",
     color:"#fff",
     fontSize:50,
     fontWeight:"500",
     marginHorizontal:15,
    },
    footer:{
      flex:1,
      alignItems:"center",
     marginTop:50
    },
    outerText:{
      fontSize:35,
      fontWeight:"500",
      color:"#fcba03"
    }
})