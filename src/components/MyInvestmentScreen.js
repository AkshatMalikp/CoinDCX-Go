import React from "react";
import { SafeAreaView, View, ViewBase } from "react-native";
import { StyleSheet ,Text } from "react-native";
import { InvestmentHeader } from "./InvestmentHeader";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList } from "react-native";
import { ScrollView } from "react-native";
import { Image } from "react-native";

const Data=[
    {
      returns:'',
      current:'',
      invested:'',
      amount:'100',
      id: 1,
      name: 'Gala',
      link:require('../assets/gala.jpg'),
    },
    {
        returns:'',
        current:'',
        invested:'',
        amount:'102',
        
       id: 2,
       name: 'Flamingo',
       link:require('../assets/falmingo.jpg'),
      },
      {
        returns:'',
        current:'',
        invested:'',
        amount:'104',
        
        id: 5,
        name: 'Helium',
        link:require('../assets/helium.jpg'),
      },
      {
        returns:'',
        current:'',
        invested:'',
        amount:'98',
        
        id: 6,
        name: 'Quant',
        link:require('../assets/quant.jpg'),
      },
      {
       
        returns:'',
        current:'',
        invested:'',
        amount:'5',
         id: 8,
        name: 'Ethereum',
        link:require('../assets/ethereum.jpg'),
      },
   

]

export const MyInvestmentScreen=()=>{
    const renderItem=({item})=>{
 return(
     <View style={styles.newcard}>
      <View style={{flexDirection:'row' ,justifyContent:'space-between',marginLeft:15,marginTop:10,marginBottom:10,marginRight:15,}}>
          <View style={{flexDirection:'row'}}>
          <Image source={item.link} style={{height:35,width:35,}}/>
          <Text style={{marginTop:7,marginLeft:10,fontWeight:'bold'}}>{item.name}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
          <Text style={{marginTop:7,}}>{item.amount}</Text>
          <Image source={require('../assets/settingicons/sidearrow.jpg')} style={{height:20,width:20,marginLeft:12,marginTop:7,}} />
          </View>
      </View>
      <View style={{flexDirection:'row'}}>
      <View style={{ flex: 1, height: 1, backgroundColor: 'lightgrey' }} />
      </View>
      <View style={{flexDirection:'row' ,justifyContent:'space-between',marginLeft:15,marginTop:10,marginBottom:10,marginRight:15,}}>
          <Text style={styles.newtext}>RETURNS</Text>
          <Text style={styles.newtext}>CURRENT</Text>
          <Text style={styles.newtext}>INVESTED</Text>
      </View>
     </View>
 )
    }
return(
    <SafeAreaView>
        
        <LinearGradient start={{x:0,y:0}} end={{x:1,y:0}} colors={['#6441A5','#2a0845']} style={styles.cover}>
       <ScrollView showsVerticalScrollIndicator={false}
       >
        <View>
            
        <InvestmentHeader />
        </View>
        <View style={styles.card}>
            <Text style={{color:'grey',marginTop:20,marginLeft:25,marginBottom:20,}}>INVESTED COINS</Text>
         <FlatList
         data={Data}
         renderItem={renderItem}
         keyExtractor={item=>item.id}
         showsVerticalScrollIndicator={false}
         />
             
        </View>
        </ScrollView>
        </LinearGradient>
        



    </SafeAreaView>
);

};


const styles=StyleSheet.create({
cover:{
    height:'100%',
    width:'100%',
},
card:{
backgroundColor:'white',
height:'100%',
borderTopStartRadius:25,
borderTopEndRadius:25,

},
newcard:{
    height:112,
    width:'88%',
    alignSelf:'center',
    borderRadius:6,
    borderColor:'grey',
    borderWidth:0.5,
    marginBottom:20,

},
newtext:{
    color:'grey',
    fontSize:10,
}
     
})