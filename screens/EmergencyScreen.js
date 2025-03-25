import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmergencyScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Emergency Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#1a1a1a",
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default EmergencyScreen;
