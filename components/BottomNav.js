import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const BottomNav = ({ navigation }) => {
  return (
    <View style={styles.bottomNav}>
      {/* Home Button - Left Half */}
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>

      {/* Dashboard Button - Right Half */}
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Dashboard")}>
        <Text style={styles.navText}>Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

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
});

export default BottomNav;
