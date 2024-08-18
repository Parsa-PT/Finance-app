import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../constants/Colors";
import { StyleSheet } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';

export default function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Wrapper}>
        <View style={styles.ProfileSec}>
          <Image
            source={require("../assets/images/person.jpeg")}
            style={{ width: 50, height: 50, borderRadius: 50 }}
            alt="pic"
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ color: "white", fontSize: 12 }}>Hi , Parsa</Text>
            <Text style={{ color: "white", fontSize: 18, fontWeight:'bold' }}>
              Your Budget
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            borderWidth: 1,
            padding: 10,
            borderColor: "white",
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 10 }}>My Transactions</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


export function ProfileHeader(){
    return(
      <SafeAreaView style={styles.container}>
      <View style={styles.flex}>
          <Text style={{color:'white' , fontWeight:'700' , fontSize:25}}>
            Profile
          </Text>
          <View style={{ width:35 , height:35  , backgroundColor:Colors.gray , display:'flex'  ,  alignItems:'center' , borderRadius:50 , justifyContent:'center'}}>
            <Entypo name="dots-three-horizontal" size={20} color="white" />
          </View>
      </View>
    </SafeAreaView>
    ) 
}



const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: Colors.light,
    paddingHorizontal: 20,
  },

  Wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection:'row'
  },

  ProfileSec: {
    display: "flex",
    flexDirection: "row",
    alignItems: " center",
    justifyContent: "center",
  },
});
