import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import * as Location from 'expo-location';
import * as SMS from 'expo-sms';

const EmergencyScreen = () => {
  // Emergency contacts (should be loaded from user settings)
  const emergencyContacts = [
    { name: "Primary Caregiver", phone: "+1234567890", relation: "Daughter" },
    { name: "Doctor", phone: "+1987654321", relation: "Dr. Smith" },
    { name: "Neighbor", phone: "+1122334455", relation: "Mr. Johnson" }
  ];

  const handleEmergencyCall = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const sendLocationToContacts = async () => {
    try {
      // Get current location
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const message = `EMERGENCY! My current location is: https://maps.google.com/?q=${location.coords.latitude},${location.coords.longitude}`;
      
      // Check if SMS is available
      const isAvailable = await SMS.isAvailableAsync();
      if (isAvailable) {
        await SMS.sendSMSAsync(
          emergencyContacts.map(c => c.phone),
          message
        );
      } else {
        alert('SMS is not available on this device');
      }
    } catch (error) {
      alert('Error sending location: ' + error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Emergency Header */}
      <View style={styles.header}>
        <MaterialCommunityIcons name="alert-octagon" size={40} color="#FF5252" />
        <Text style={styles.headerText}>Emergency Assistance</Text>
      </View>

      {/* Emergency Call Button */}
      <TouchableOpacity 
        style={styles.emergencyButton}
        onPress={() => handleEmergencyCall(emergencyContacts[0].phone)}
      >
        <FontAwesome5 name="phone-alt" size={30} color="white" />
        <Text style={styles.emergencyButtonText}>CALL CAREGIVER</Text>
      </TouchableOpacity>

      {/* Location Sharing */}
      <TouchableOpacity 
        style={styles.secondaryButton}
        onPress={sendLocationToContacts}
      >
        <MaterialCommunityIcons name="map-marker-radius" size={30} color="white" />
        <Text style={styles.secondaryButtonText}>SHARE MY LOCATION</Text>
      </TouchableOpacity>

      {/* Emergency Contacts List */}
      <View style={styles.contactsSection}>
        <Text style={styles.sectionTitle}>Emergency Contacts</Text>
        {emergencyContacts.map((contact, index) => (
          <TouchableOpacity 
            key={index}
            style={styles.contactCard}
            onPress={() => handleEmergencyCall(contact.phone)}
          >
            <View style={styles.contactIcon}>
              <MaterialCommunityIcons 
                name={index === 0 ? "account-heart" : "account"} 
                size={28} 
                color="#FF5252" 
              />
            </View>
            <View style={styles.contactInfo}>
              <Text style={styles.contactName}>{contact.name}</Text>
              <Text style={styles.contactRelation}>{contact.relation}</Text>
            </View>
            <MaterialCommunityIcons name="phone" size={28} color="#4CAF50" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Emergency Instructions */}
      <View style={styles.instructions}>
        <Text style={styles.instructionsTitle}>What to do in an emergency:</Text>
        <View style={styles.instructionItem}>
          <Text style={styles.instructionNumber}>1</Text>
          <Text style={styles.instructionText}>Stay calm and press the red button above</Text>
        </View>
        <View style={styles.instructionItem}>
          <Text style={styles.instructionNumber}>2</Text>
          <Text style={styles.instructionText}>Share your location if you're lost</Text>
        </View>
        <View style={styles.instructionItem}>
          <Text style={styles.instructionNumber}>3</Text>
          <Text style={styles.instructionText}>Wait for help to arrive</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#121212",
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  emergencyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF5252',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 5,
  },
  emergencyButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1976D2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 30,
  },
  secondaryButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  contactsSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  contactIcon: {
    marginRight: 15,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  contactRelation: {
    color: '#AAAAAA',
    fontSize: 14,
  },
  instructions: {
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    padding: 20,
  },
  instructionsTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  instructionItem: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  instructionNumber: {
    color: '#FF5252',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  instructionText: {
    color: 'white',
    fontSize: 16,
    flex: 1,
  },
});

export default EmergencyScreen;