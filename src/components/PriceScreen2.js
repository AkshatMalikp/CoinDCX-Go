import React from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { StyleSheet ,Text,View } from "react-native";
import { Header } from "./Header";
import { Data4 } from "../data/Data4";
import { FlatList } from "react-native";
import { Image } from "react-native";


export const PriceScreen2=({navigation})=>{
    const renderItem=({item})=>{
     return(
         <View>
             <TouchableOpacity>

            
         <View style={{flexDirection:'row',justifyContent:"space-between",marginLeft:15,marginRight:15}}>
             <View style={{flexDirection:'row'}}>
             <Image source={item.link} style={{height:50,width:50}} />
             <Text style={{fontSize:15,marginLeft:10,marginTop:6,}}>{item.name}</Text>
             </View>
             <View style={{flexDirection:'row',marginTop:15,}}>
            <Text style={{marginRight:30,}}>${item.price}</Text>
            <Text style={{marginRight:10,color:item.colorr}}>{item.change}</Text>
             </View>

             
         </View>
         </TouchableOpacity>

         
        <View style={{flexDirection: 'row', alignItems: 'center',margin:15,}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'lightgrey'}} />
           </View>

           </View>
     )
    }
return(
    <View>
        <Header/>
        <View style={styles.subheader}>

        <Text style={styles.textstyle}> COIN NAME </Text>
        <View style={styles.subheader2}>
            <Text style={{ marginLeft:10 , ...styles.textstyle}}> PRICE </Text>
            <Text style={styles.textstyle}> 24H CHANGE </Text>
        </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center',margin:15,}}>
  <View style={{flex: 1, height: 1, backgroundColor: 'lightgrey'}} />
     </View>
     <FlatList 
     data={Data4}
     renderItem={renderItem}
     keyExtractor={item=>item.id} 
     showsVerticalScrollIndicator={false}



     />
        </View>
);

};


const styles=StyleSheet.create({

     subheader:{
         flexDirection:'row',
         justifyContent:'space-between',
         marginLeft:15,
         marginRight:15,


     },
     subheader2:{
        flexDirection:'row',
        justifyContent:'space-between',

    },
    textstyle:{
        fontSize:13,
        color:'grey',

    }
})