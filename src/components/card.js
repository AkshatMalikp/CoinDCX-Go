import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
export const Card=(props)=>{
    return(
        <TouchableOpacity>
        <View style={styles.container}>
         <Image style={styles.image} source={props.link} />
         <Text style={styles.name}>{props.name}</Text>
         <Text style={styles.price}>$ {props.price}</Text>
         <Text style={{color:props.colorr, marginLeft:10,marginTop:5,fontSize:20,}}>{props.change}</Text>
        </View>
        </TouchableOpacity>

    );
}


const styles=StyleSheet.create({
  
container:{
height:180,
width:140,
backgroundColor:'#E2E8E8',
marginRight:15,
borderRadius:10,
},
image:{
    height:50,
    width:50,
    borderRadius:50,
    marginLeft:10,
    marginTop:20,
},
name:{
    marginLeft:10,
    marginTop:5,
    fontSize:15,
    fontWeight:"bold",


},

price:{

    marginLeft:10,
    marginTop:5,
}


})