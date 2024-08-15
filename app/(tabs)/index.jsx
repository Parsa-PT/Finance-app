import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import { Stack } from "expo-router";
import Header from "../../components/Header";
import { Image } from "react-native";
import { PieChart } from "react-native-gifted-charts";

export default function index() {

    
        const pieData = [
            {
                value:47,
                color:Colors.tint,
                focused:true,
                text:'47%'
            },
            {
                value:40,
                color:Colors.blue,
         
                text:'40%'
            },
            {
                value:16,
                color:Colors.white,
 
                text:'16%'
            },
            {
                value:3,
                color:'#FFA5BA',
                gradi:'#FF7F97',
                text:'3%'
            }
        ]
    

  return (
    <>
      <Stack.Screen
        options={{
          header: () => <Header />,
        }}
      />
      <View
        style={{
          backgroundColor: Colors.light,
          flex: 1,
          paddingHorizontal: 30,
        }}
      >
        <ScrollView showsHorizontalScrollIndicator={false}>
          <View style={{ display: "flex", flexDirection: "row" , justifyContent:'space-between' , alignItems:'center' }}>
            <View>
              <Text style={{ color: "white", marginBottom: 5 }}>
                My Expenses
              </Text>
              <Text
                style={{ color: "white", fontSize: 36, fontWeight: "bold" }}
              >
                $1,455.
                <Text style={{ color: "white", fontSize: 22 }}>00</Text>
              </Text>
            </View>
            <View style={{padding:5 }} >
              <PieChart
                data={pieData}
                donut
                showGradient
                sectionAutoFocus
                focusOnPress
                semiCircle
                radius={70}
                innerRadius={55}
                innerCircleColor={"#232B5D"}
                centerLabelComponent={() => {
                  return (
                    <View
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <Text
                        style={{
                          fontSize: 22,
                          color: "white",
                          fontWeight: "bold",
                        }}
                      >
                        47%
                      </Text>
                     
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}
