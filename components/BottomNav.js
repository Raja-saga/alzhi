import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";


import { SafeAreaView } from 'react-native';

const BottomNav = ({ navigation, currentRoute }) => {
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text style={[
          styles.navText,
          currentRoute === "Home" && { color: "#4CAF50" } // Green if active
        ]}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};
<SafeAreaView style={styles.bottomNavContainer}>
  <View style={styles.bottomNav}>
    {/* Buttons */}
  </View>
</SafeAreaView>

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "#282c34",
  },
  navButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  bottomNavContainer: {
    backgroundColor: "#282c34",
  },
  bottomNav: {
    flexDirection: "row",
    height: 60,
  },
});

export default BottomNav;
