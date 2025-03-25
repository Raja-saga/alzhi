import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      {/* Emergency Button */}
      <TouchableOpacity style={[styles.button, styles.emergencyButton]}>
        <Text style={styles.buttonText}>🚨 Emergency</Text>
      </TouchableOpacity>

      {/* Location Button */}
      <TouchableOpacity style={[styles.button, styles.locationButton]}>
        <Text style={styles.buttonText}>📍 Location</Text>
      </TouchableOpacity>

      {/* Reminder Button */}
      <TouchableOpacity style={[styles.button, styles.reminderButton]}>
        <Text style={styles.buttonText}>⏰ Reminder</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    width: "80%",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  emergencyButton: {
    backgroundColor: "red",
  },
  locationButton: {
    backgroundColor: "blue",
  },
  reminderButton: {
    backgroundColor: "green",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default DashboardScreen;
