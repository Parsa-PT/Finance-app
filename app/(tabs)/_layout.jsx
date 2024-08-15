import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import {Colors} from '../../constants/Colors'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { StatusBar } from 'expo-status-bar';

export default function layout() {
  return (
    <>
     <Tabs screenOptions={{
        tabBarStyle:{
             backgroundColor : Colors.gray,
             position : 'absolute',
             bottom:40,
             justifyContent : 'center',
             alignSelf : 'center',
             height:63,
             marginHorizontal:110,
             borderRadius:40,
             borderWidth:3,
             borderColor:'#333',
             borderTopColor:'#333',
             paddingHorizontal:10,
             paddingVertical:8,
             paddingBottom:7
        },
        tabBarShowLabel:false,
        tabBarInactiveTintColor:'#999',
        tabBarActiveTintColor:Colors.white,
       }}>
            <Tabs.Screen name='index' options={{
                tabBarIcon:({color , size , focused})=>(
                    <View style={{
                        backgroundColor: focused? Colors.tint : Colors.gray,
                        borderRadius:30,
                        padding:12
                    }}>
                       <Ionicons name="home" size={22} color={color} />
                    </View>
                )
            }} />
            <Tabs.Screen name='profile' options={{
                tabBarIcon:({color , size , focused})=>(
                    <View style={{
                        backgroundColor: focused? Colors.tint : Colors.gray,
                        borderRadius:30,
                        padding:12
                    }}>
                       <Ionicons name="person-circle-outline" size={22} color={color}/>
                    </View>
                )
            }} />
            <Tabs.Screen name='transactions' options={{
                tabBarIcon:({color , size , focused})=>(
                    <View style={{
                        backgroundColor: focused? Colors.tint : Colors.gray,
                        borderRadius:30,
                        padding:12
                    }}>
                       <MaterialIcons name="transform" size={22} color={color} />
                    </View>
                )
            }} />

       </Tabs>
       <StatusBar  style='light'/>
    </>
      
    
  )
}