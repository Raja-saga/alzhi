import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const HomeScreen = ({ navigation }) => {
  // State to manage news
  const [newsList, setNewsList] = useState([]);
  const [newsText, setNewsText] = useState('');

  // State for Memory Lane photos
  const [selectedPhotos, setSelectedPhotos] = useState([]);

  // Hover state for remove buttons (for web)
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Function to add news
  const addNews = () => {
    if (newsText.trim()) {
      setNewsList([...newsList, newsText]);
      setNewsText(''); // Clear the input field
    }
  };

  // Function to remove a news item
  const removeNews = (index) => {
    const updatedNews = [...newsList];
    updatedNews.splice(index, 1);
    setNewsList(updatedNews);
  };

  // Function to select photos from gallery
  const selectPhotos = () => {
    launchImageLibrary({ mediaType: 'photo', selectionLimit: 0 }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        Alert.alert('Error', response.errorMessage);
      } else {
        const selectedImages = response.assets.map((asset) => asset.uri);
        setSelectedPhotos([...selectedPhotos, ...selectedImages]);
      }
    });
  };

  // Function to remove a selected photo
  const removePhoto = (index) => {
    const updatedPhotos = [...selectedPhotos];
    updatedPhotos.splice(index, 1);
    setSelectedPhotos(updatedPhotos);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      {/* Memory Lane Section */}
      <View style={styles.memoryLaneSection}>
        <Text style={styles.memoryLaneTitle}>Memory Lane</Text>

        {/* Button to select photos */}
        <TouchableOpacity style={styles.addButton} onPress={selectPhotos}>
          <Text style={styles.buttonText}>Select Photos</Text>
        </TouchableOpacity>

        {/* Display selected photos */}
        <ScrollView horizontal style={styles.photoList}>
          {selectedPhotos.map((photo, index) => (
            <View key={index} style={styles.photoContainer}>
              <Image source={{ uri: photo }} style={styles.photo} />
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removePhoto(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Text
                  style={[
                    styles.removeText,
                    hoveredIndex === index && styles.removeTextHover,
                  ]}
                >
                  ×
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* News Section */}
      <View style={styles.newsSection}>
        <Text style={styles.newsTitle}>News</Text>

        {/* Input field to add news */}
        <TextInput
          style={styles.input}
          value={newsText}
          onChangeText={setNewsText}
          placeholder="Enter news here"
          placeholderTextColor="#888"
        />
        
        <TouchableOpacity style={styles.addButton} onPress={addNews}>
          <Text style={styles.buttonText}>Add News</Text>
        </TouchableOpacity>

        {/* Display news items */}
        <ScrollView style={styles.newsList}>
          {newsList.map((news, index) => (
            <View key={index} style={styles.newsItem}>
              <Text style={styles.newsText}>{news}</Text>
              <TouchableOpacity
                onPress={() => removeNews(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <View
                  style={[
                    styles.removeCircle,
                    hoveredIndex === index && styles.removeCircleHover,
                  ]}
                >
                  <Text style={styles.removeText}>×</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Bottom Navigation with Home and Dashboard buttons */}
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
    justifyContent: "space-between", // Space content at top and bottom
    paddingBottom: 70, // Padding for bottom navigation
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    alignSelf: "center",
  },
  memoryLaneSection: {
    padding: 15,
    backgroundColor: "#87CEFA", // Light Sky Blue background for Memory Lane
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  memoryLaneTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  newsSection: {
    padding: 15,
    backgroundColor: "#87CEFA", // Light Sky Blue background for News
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  newsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    color: "#333",
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  newsList: {
    maxHeight: 200,
  },
  newsItem: {
    backgroundColor: "#f4f4f4",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  newsText: {
    color: "#333",
    fontSize: 16,
  },
  removeText: {
    color: "#ff6f61",
    fontSize: 16,
    fontWeight: "bold",
  },
  removeTextHover: {
    color: "#ff4500", // Change color on hover
  },
  removeCircle: {
    backgroundColor: "#ff6f61",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  removeCircleHover: {
    backgroundColor: "#ff4500", // Change color on hover
  },
  photoList: {
    flexDirection: 'row',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  photoContainer: {
    marginRight: 10,
    position: 'relative',
    marginBottom: 10,
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  removeButton: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#ff6f61',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
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

export default HomeScreen;
