
import { StyleSheet, View } from "react-native";
import React, { useState } from "react";

import { TextInput,Text } from "react-native";
export const Header=()=>{
return(
    <View>
        <TextInput style={styles.searchbar}  placeholder="Search coins to invest..." />
        </View>

);

}


const styles=StyleSheet.create({

    searchbar:{
         height:50,
         borderWidth:0.5,
         borderColor:'black',
         marginTop:15,
         paddingLeft:30,
         marginLeft:20,
         marginRight:20,
         borderRadius:3,
         borderColor:'grey',
         marginBottom:50,

       

    },
})