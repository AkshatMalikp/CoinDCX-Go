import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from "../../components/HomeScreen";

import { MyInvestmentScreen } from "../../components/MyInvestmentScreen";
import { OrderScreen } from "../../components/OrderScreen";
import { AccountScreen } from "../../components/AccountScreen";
import { PriceNavigator } from "./Price.navigator";
import { View ,Image,Text} from "react-native";
import { Header } from "../../components/Header";
const Tab = createBottomTabNavigator();

export const Homenavigator=()=> {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style:{
          height:100,
        }

      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({focused})=>(
            <View>
            <Image source={require('../../assets/homeicon.jpg')} style={{

              width:25,
              height:25,
            }}/>


            <Text style={{fontSize:10,color :focused? '#0000FF' :'black'}}> 
              Home
            </Text>



           </View>
           

        )
      }} />
      <Tab.Screen name="Prices" component={PriceNavigator}  options={{
        tabBarIcon: ({focused})=>(
            <View>
            <Image source={require('../../assets/pricesicon.jpg')} style={{width:25,height:25,}}/>
            <Text style={{fontSize:10,color :focused? '#0000FF' :'black'}}> 
              Prices
            </Text>
            </View>
        ),
      }}
         
      />
      
      <Tab.Screen name="Orders" component={OrderScreen} options={{
        tabBarIcon: ({focused})=>(
            <View>
            <Image source={require('../../assets/ordersicon.jpg')} style={{

              width:25,
              height:25,
            }}/>


            <Text style={{fontSize:10,color :focused? '#0000FF' :'black'}}> 
              Orders
            </Text>



           </View>
           

        )
      }}/>
      <Tab.Screen name="My Investments" component={MyInvestmentScreen} options={{
        tabBarIcon: ({focused})=>(
            <View>
            <Image source={require('../../assets/myinvestment.jpg')} style={{

              width:25,
              height:25,
              alignSelf:'center'
            }}/>


            <Text style={{fontSize:10,color :focused? '#0000FF' :'black'}}> 
              My Investment
            </Text>



           </View>
           

        )
      }}/>
      
      <Tab.Screen name="Account" component={AccountScreen} options={{
        tabBarIcon: ({focused})=>(
            <View>
            <Image source={require('../../assets/accountsicon.jpg')} style={{

              width:25,
              height:25,
              alignSelf:'center',
            }}/>


            <Text style={{fontSize:10,color :focused? '#0000FF' :'black'}}> 
              Account
            </Text>



           </View>
           

        )
      }} />
    </Tab.Navigator>
  );
}