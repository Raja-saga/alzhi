import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import DashboardScreen from "../screens/DashboardScreen";
import RemindersScreen from "../screens/RemindersScreen";
import EmergencyScreen from "../screens/EmergencyScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          const iconSize = 28; // Larger icons for better visibility

          if (route.name === "Home") {
            return (
              <MaterialCommunityIcons
                name={focused ? "home" : "home-outline"}
                size={iconSize}
                color={color}
              />
            );
          } else if (route.name === "Dashboard") {
            return (
              <Ionicons
                name={focused ? "analytics" : "analytics-outline"}
                size={iconSize}
                color={color}
              />
            );
          } else if (route.name === "Reminders") {
            return (
              <Ionicons
                name={focused ? "alarm" : "alarm-outline"}
                size={iconSize}
                color={color}
              />
            );
          } else if (route.name === "Emergency") {
            return (
              <View style={styles.emergencyTab}>
                <MaterialCommunityIcons
                  name="alert-circle"
                  size={iconSize}
                  color="#fff"
                />
              </View>
            );
          }
        },
        tabBarActiveTintColor: "#4CAF50", // Green for active state
        tabBarInactiveTintColor: "#757575",
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        headerShown: false,
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="Reminders"
        component={RemindersScreen}
        options={{ tabBarLabel: "Reminders" }}
      />
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ tabBarLabel: "Activities" }}
      />
      <Tab.Screen
        name="Emergency"
        component={EmergencyScreen}
        options={{ 
          tabBarLabel: "HELP",
          tabBarIconStyle: styles.emergencyIcon
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 80, // Larger tab bar for easier tapping
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 0,
    elevation: 10, // Shadow for better visibility
  },
  tabBarLabel: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: "600",
  },
  emergencyTab: {
    backgroundColor: "#FF5252",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    elevation: 5,
  },
  emergencyIcon: {
    marginBottom: 20,
  },
});