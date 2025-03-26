import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Dashboard</Text>

        {/* Row 1 */}
        <View style={styles.row}>
          {/* Emergency Call Button */}
          <TouchableOpacity
            style={[styles.featureButton, { backgroundColor: "#FF6F61" }]} // Smart red color
            onPress={() => navigation.navigate('Emergency')}
          >
            <Text style={styles.buttonText}>🚨 Emergency</Text>
          </TouchableOpacity>

          {/* Location Button */}
          <TouchableOpacity
            style={[styles.featureButton, { backgroundColor: "#4CAF50" }]} // Green color
            onPress={() => navigation.navigate('Location')}
          >
            <Text style={styles.buttonText}>📍 Location</Text>
          </TouchableOpacity>
        </View>

        {/* Row 2 */}
        <View style={styles.row}>
          {/* Reminder Button */}
          <TouchableOpacity
            style={[styles.featureButton, { backgroundColor: "#FF9800" }]} // Orange color
            onPress={() => navigation.navigate('Reminder')}
          >
            <Text style={styles.buttonText}>📝 Reminder</Text>
          </TouchableOpacity>

          {/* Medicine Button */}
          <TouchableOpacity
            style={[styles.featureButton, { backgroundColor: "#3F51B5" }]} // Blue color
            onPress={() => navigation.navigate('Medicine')}
          >
            <Text style={styles.buttonText}>💊 Medicine</Text>
          </TouchableOpacity>
        </View>

        {/* Row 3 */}
        <View style={styles.row}>
          {/* Tasks Button */}
          <TouchableOpacity
            style={[styles.featureButton, { backgroundColor: "#9C27B0" }]} // Purple color
            onPress={() => navigation.navigate('Tasks')}
          >
            <Text style={styles.buttonText}>🗂 Tasks</Text>
          </TouchableOpacity>

          {/* Gallery Button */}
          <TouchableOpacity
            style={[styles.featureButton, { backgroundColor: "#00BCD4" }]} // Cyan color
            onPress={() => navigation.navigate('Gallery')}
          >
            <Text style={styles.buttonText}>📸 Gallery</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation with fixed Home and Dashboard buttons */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={[styles.navButton, { backgroundColor: "#0099ff" }]}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>🏠 Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.navButton, { backgroundColor: "#ff6600" }]}
          onPress={() => navigation.navigate('Dashboard')}
        >
          <Text style={styles.buttonText}>📊 Dashboard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#87CEFA", // Light Sky Blue background color
    paddingBottom: 70, // Padding to make space for bottom navigation
  },
  scrollContainer: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  featureButton: {
    width: "45%", // 2 buttons per row
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 70, // Bigger buttons
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16, // Slightly bigger text
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "#333333",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  navButton: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 5,
  },
});

export default DashboardScreen;
