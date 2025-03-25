import React from "react";
import { View, Text } from "react-native";
import BottomNav from "./BottomNav"; // Import the bottom nav

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 24, textAlign: "center", marginTop: 50 }}>Welcome to Home Screen</Text>

      <BottomNav navigation={navigation} /> {/* Add BottomNav here */}
    </View>
  );
};

export default HomeScreen;
