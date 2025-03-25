import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ReminderScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reminders</Text>
      {/* Your reminder content here */}

      {/* Fixed Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={[styles.navButton, { backgroundColor: "#0099ff" }]}
          onPress={() => navigation.navigate("Home")}>
          <Text style={styles.buttonText}>🏠 Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.navButton, { backgroundColor: "#ff6600" }]}
          onPress={() => navigation.navigate("Dashboard")}>
          <Text style={styles.buttonText}>📊 Dashboard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: 'center',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "#333333",
  },
  navButton: {
    padding: 10,
    backgroundColor: "#ff6600",
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ReminderScreen;
