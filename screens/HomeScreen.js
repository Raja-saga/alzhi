import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const HomeScreen = ({ navigation }) => {
  const [newsList, setNewsList] = useState([]);
  const [newsText, setNewsText] = useState('');
  const [selectedPhotos, setSelectedPhotos] = useState([]);

  // Function to select photos from gallery
  const selectPhotos = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access gallery is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedPhotos([...selectedPhotos, ...result.assets.map(asset => asset.uri)]);
    }
  };

  return (
    <View style={styles.container}>

      {/* Memory Lane Section (Moved Down) */}
      <View style={styles.memoryLaneSection}>
        <Text style={styles.sectionTitle}>Memory Lane</Text>
        <TouchableOpacity style={styles.smallButton} onPress={selectPhotos}>
          <Text style={styles.buttonText}> Select Photos</Text>
        </TouchableOpacity>
        <ScrollView horizontal style={styles.photoList}>
          {selectedPhotos.map((photo, index) => (
            <View key={index} style={styles.photoContainer}>
              <Image source={{ uri: photo }} style={styles.photo} />
            </View>
          ))}
        </ScrollView>
      </View>

      {/* News Section (Moved Down) */}
      <View style={styles.newsSection}>
        <Text style={styles.sectionTitle}> News</Text>
        <TextInput
          style={styles.input}
          value={newsText}
          onChangeText={setNewsText}
          placeholder="Enter news here"
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.smallButton} onPress={() => setNewsList([...newsList, newsText])}>
          <Text style={styles.buttonText}> Add News</Text>
        </TouchableOpacity>
        <ScrollView style={styles.newsList}>
          {newsList.map((news, index) => (
            <View key={index} style={styles.newsItem}>
              <Text style={styles.newsText}>{news}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Bottom Navigation - Aligned with Light Sky Blue Theme */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={[styles.navButton, styles.homeButton]} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navText}>🏠</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navButton, styles.dashboardButton]} onPress={() => navigation.navigate('Dashboard')}>
          <Text style={styles.navText}>🛠️</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#87CEFA", // Light Sky Blue background
    paddingBottom: 70,
    paddingHorizontal: 10,
  },
  memoryLaneSection: {
    padding: 15,
    backgroundColor: "#87CEFA",
    marginTop: 80, // Moved down
    borderRadius: 10,
  },
  newsSection: {
    padding: 15,
    backgroundColor: "#87CEFA",
    marginTop: 20, // Moved down
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  input: {
    height: 35,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    color: "#333",
    marginBottom: 10,
    fontSize: 14,
  },
  smallButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  photoList: {
    flexDirection: "row",
    marginTop: 10,
  },
  photoContainer: {
    marginRight: 10,
    marginBottom: 10,
  },
  photo: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  newsList: {
    maxHeight: 200,
  },
  newsItem: {
    backgroundColor: "#f4f4f4",
    padding: 8,
    marginBottom: 8,
    borderRadius: 8,
  },
  newsText: {
    color: "#333",
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-evenly", // Even spacing
    alignItems: "center",
    padding: 10,
    backgroundColor: "#87CEFA", // Light Sky Blue theme
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  navButton: {
    width: 55, // Circular
    height: 55, // Circular
    borderRadius: 27.5, // Make it a circle
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF", // White for a pro feel
    elevation: 5, // Slight shadow effect
  },
  homeButton: {
    backgroundColor: "#FFFFFF",
  },
  dashboardButton: {
    backgroundColor: "#FFFFFF",
  },
  navText: {
    color: "#000", // Darker text for better visibility
    fontSize: 24,
  },
});

export default HomeScreen;
