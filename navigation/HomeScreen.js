import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import BottomNav from "./BottomNav";
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  // Sample recent activities for memory support
  const recentActivities = [
    { id: 1, name: "Took medication", time: "9:00 AM", icon: "medication" },
    { id: 2, name: "Called daughter", time: "11:30 AM", icon: "call" },
    { id: 3, name: "Lunch", time: "1:00 PM", icon: "restaurant" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header with date for orientation */}
        <View style={styles.header}>
          <Text style={styles.dateText}>{new Date().toLocaleDateString()}</Text>
          <Text style={styles.title}>Welcome Back!</Text>
        </View>

        {/* Emergency Quick Access */}
        <TouchableOpacity 
          style={styles.emergencyButton}
          onPress={() => navigation.navigate('Emergency')}
        >
          <MaterialIcons name="emergency" size={30} color="white" />
          <Text style={styles.emergencyText}>Emergency Help</Text>
        </TouchableOpacity>

        {/* Recent Activities for Memory Support */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activities</Text>
          {recentActivities.map((activity) => (
            <View key={activity.id} style={styles.activityItem}>
              <MaterialIcons 
                name={activity.icon} 
                size={24} 
                color="#4CAF50" 
                style={styles.activityIcon} 
              />
              <View>
                <Text style={styles.activityName}>{activity.name}</Text>
                <Text style={styles.activityTime}>{activity.time}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Quick Action Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => navigation.navigate('Reminders')}
          >
            <FontAwesome name="bell" size={24} color="#2196F3" />
            <Text style={styles.actionText}>Reminders</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => navigation.navigate('MemoryGame')}
          >
            <FontAwesome name="gamepad" size={24} color="#FF9800" />
            <Text style={styles.actionText}>Games</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <BottomNav navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContent: {
    paddingBottom: 80, // Space for bottom nav
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  dateText: {
    fontSize: 18,
    color: '#666',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  emergencyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF5252',
    padding: 15,
    borderRadius: 10,
    margin: 20,
  },
  emergencyText: {
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  section: {
    margin: 20,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  activityIcon: {
    marginRight: 15,
  },
  activityName: {
    fontSize: 18,
    color: '#333',
  },
  activityTime: {
    fontSize: 14,
    color: '#666',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
  },
  actionButton: {
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '45%',
    elevation: 3,
  },
  actionText: {
    marginTop: 8,
    fontSize: 16,
    color: '#333',
  },
});

export default HomeScreen;