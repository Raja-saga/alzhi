import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DashboardScreen from '../screens/DashboardScreen';
import EmergencyScreen from '../screens/EmergencyScreen';
import RemindersScreen from '../screens/RemindersScreen';
import MemoryGameScreen from '../screens/MemoryGameScreen';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerShown: true,
        headerStyle: {
          backgroundColor: '#282c34',
          height: 100,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: 'bold',
        },
        headerLeft: () => (
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 15 }}
            accessibilityLabel="Go back"
          >
            <Ionicons name="arrow-back" size={30} color="white" />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity 
            onPress={() => navigation.navigate('Home')}
            style={{ marginRight: 15 }}
            accessibilityLabel="Go to home"
          >
            <Ionicons name="home" size={30} color="white" />
          </TouchableOpacity>
        ),
      })}
    >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Dashboard" 
        component={DashboardScreen} 
        options={{ title: 'Activity Dashboard' }}
      />
      <Stack.Screen 
        name="Emergency" 
        component={EmergencyScreen} 
        options={{ 
          title: 'Emergency Contacts',
          headerStyle: {
            backgroundColor: '#FF5252', // Red for emergency
            height: 100,
          }
        }}
      />
      <Stack.Screen 
        name="Reminders" 
        component={RemindersScreen} 
        options={{ title: 'Daily Reminders' }}
      />
      <Stack.Screen 
        name="MemoryGame" 
        component={MemoryGameScreen} 
        options={{ title: 'Memory Games' }}
      />
    </Stack.Navigator>
  );
}