import React from "react";
import { Image, SafeAreaView, ScrollView, View } from "react-native";
import { StyleSheet ,Text } from "react-native";
import { Data1 } from "../data/Data1";
import { FlatList } from "react-native";
import { Card } from "./card";
import { Data2 } from "../data/Data2";
import { Data3 } from "../data/Data3";
import { PromoCode } from "./promocard";
import AppIntroSlider from 'react-native-app-intro-slider';
import { ImageBackground } from "react-native";
const slides=[
    {
    key:1,
    image : require('../assets/ad1.jpg'),
    },
    {
  
        key:2,
        image : require('../assets/ad2.jpg'),
    },
    {
  
        key:3,
        image : require('../assets/ad3.jpg'),
    },
    {
  
        key:4,
        image : require('../assets/ad4.jpg'),
    },
]
export const HomeScreen=()=>{

    const renderItem = ({ item }) => (
        <Card name={item.name} link={item.link} change={item.change} colorr={item.colorr} price={item.price}/>
      );
    const renderItem2=({item})=>(
        <ImageBackground source={item.image} style={{height:'100%',width:'100%'}}>
            
        </ImageBackground>
    ); 
return(

    <SafeAreaView style={styles.container}>

        <ScrollView>
        <Text style={styles.header}>
             Hi AKSHAT
        </Text>
        <View style={styles.adconatiner} >
        <AppIntroSlider renderItem={renderItem2} data={slides} showNextButton={false} showDoneButton={false}/>

        </View>
        <Text style={{fontWeight:'bold',fontSize:20,}}>Newly launched on CoinDCX</Text>
        <Text style={{marginBottom:15,}}>Explore more assets for your portfolio</Text>
          <FlatList
           data={Data1}
           renderItem={renderItem}
           keyExtractor={item=>item.id} 
           horizontal={true}
           showsHorizontalScrollIndicator={false}
          />
          <Text style={{fontWeight:'bold',fontSize:20,marginTop:30,}}>Ideal for new investors</Text>
        <Text style={{marginBottom:15,}}>Start investing in these most popular coins</Text>
          <FlatList
           data={Data2}
           renderItem={renderItem}
           keyExtractor={item=>item.id} 
           horizontal={true}
           showsHorizontalScrollIndicator={false}
          />
          <Text style={{fontWeight:'bold',fontSize:20,marginTop:30,}}>Top Gainer</Text>
        <Text style={{marginBottom:15,}}>Coins that have gained the most in 24 hours</Text>
          <FlatList
           data={Data3}
           renderItem={renderItem}
           keyExtractor={item=>item.id} 
           horizontal={true}
           showsHorizontalScrollIndicator={false}
          />
          <PromoCode />
          <View  style={styles.tipcontainer}>

          
          <Text style={{fontWeight:'bold',fontSize:20,marginTop:10,}}>Security Tips</Text>
        <Text style={{marginBottom:15,}}>Keep your account safe by following these quick tips.</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.securitycontainer}>
           <Text style={{color:'white',marginLeft:15,marginTop:15,marginRight:15,}}>Never share your OTP, passwords or accunt details with anyone</Text>
        </View>
        <View style={styles.securitycontainer}>
           <Text style={{color:'white',marginLeft:15,marginTop:15,marginRight:15,}}>Use a strong passwords that you have not used anywhere else</Text>
        </View>
        <View style={styles.securitycontainer}>
           <Text style={{color:'white',marginLeft:15,marginTop:15,marginRight:15,}}>Enable Google Authenticator two step verification for your account</Text>
        </View>
        <View style={styles.securitycontainer}>
           <Text style={{color:'white',marginLeft:15,marginTop:15,marginRight:15,}}>Never transfer money to anyone claiming to be from CoinDCX</Text>
        </View>
        </ScrollView>
        </View>


          </ScrollView>
    </SafeAreaView>
);

};


const styles=StyleSheet.create({
 header:{
     fontSize:15,
 },

 container:{
marginLeft:15,
marginTop:15,
 },

 securitycontainer:{
 backgroundColor:'#67A487',
 width:220,
 height:80,
 borderRadius:5,
 marginBottom:20,
 marginRight:15,
 },
 tipcontainer:{
    backgroundColor:'#E2E8E8',
 },
 adconatiner:{
  width:'100%',
  height:180,
  marginTop:20,
  marginBottom:50,

  
 },
     
})