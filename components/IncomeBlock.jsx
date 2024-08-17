import { View, Text, FlatList } from "react-native";
import React from "react";
import { INCOME } from "../constants";
import { StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../constants/Colors";

export default function IncomeBlock() {
  return (
    <View>
      <View style={{ marginTop: 30 }}>
        <Text style={{ color: "white", fontSize: 16 }}>
          My <Text style={{ fontWeight: "700" }}>Income</Text>
        </Text>
        <FlatList
          data={INCOME}
          renderItem={({ item, index }) => (
            <View key={index} style={styles.block}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 50,
                    borderWidth: 1,
                    borderColor: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {item.title == "Salary" ? (
                    <FontAwesome name="dollar" size={15} color="white" />
                  ) : item.title == "Freelancing" ? (
                    <Ionicons name="wallet-outline" size={15} color="white" />
                  ) : (
                    <Ionicons
                      name="bag-handle-outline"
                      size={15}
                      color="white"
                    />
                  )}
                </View>
                <Text style={{ color: "white", fontSize: 26 }}>...</Text>
              </View>
              <Text style={{ color: "white" }}>{item.title}</Text>
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 16 }}
              >
                ${item.amount}
              </Text>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    width: 150,
    backgroundColor: Colors.gray,
    borderRadius: 15,
    padding: 15,
    gap: 6,
    marginRight: 20,
    marginTop: 20,
  },
});
