
import React from "react";
import { SafeAreaView } from "react-native";
import { StyleSheet ,Text } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

export const OrderScreen=()=>{
return(
        <LinearGradient  colors={['#00b09b','#96c93d']} style={styles.container}>

        
        </LinearGradient>
);

};


const styles=StyleSheet.create({
container:{
    height:'100%',
    width:'100%',
}
     
})