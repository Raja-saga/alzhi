import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const HomeScreen = ({ navigation }) => {
  // State for News and Gallery
  const [news, setNews] = useState('');
  const [newsList, setNewsList] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

  // News handler
  const handleAddNews = () => {
    if (news.trim() !== '') {
      setNewsList((prevNewsList) => [
        ...prevNewsList,
        { id: Math.random().toString(), text: news },
      ]);
      setNews('');
    }
  };

  // Image Picker Handler
  const pickImages = async () => {
    // Request permission to access the device media library
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (permissionResult.granted === false) {
      alert('Permission to access media library is required!');
      return;
    }

    // Open image picker and allow multiple selection
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true, // Allows multiple images selection
      quality: 1, // High-quality images
    });

    if (!result.cancelled) {
      // Check if multiple assets are selected
      if (result.assets && result.assets.length > 0) {
        setSelectedImages(result.assets); // Save multiple selected images
      }
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Home Screen</Text>

        {/* News Module */}
        <View style={styles.module}>
          <Text style={styles.moduleTitle}>News</Text>
          <TextInput
            style={styles.input}
            value={news}
            onChangeText={(text) => setNews(text)}
            placeholder="Enter news here"
          />
          <Button title="Add News" onPress={handleAddNews} />
          <FlatList
            data={newsList}
            renderItem={({ item }) => (
              <Text style={styles.newsItem}>{item.text}</Text>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>

        {/* Gallery Module */}
        <View style={styles.module}>
          <Text style={styles.moduleTitle}>Gallery</Text>
          
          {/* Select Photo Button */}
          <TouchableOpacity style={styles.selectButton} onPress={pickImages}>
            <Text style={styles.buttonText}>Select Photos</Text>
          </TouchableOpacity>

          {/* Display Selected Photos */}
          {selectedImages.length > 0 && (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {selectedImages.map((image, index) => (
                <Image
                  key={index}
                  source={{ uri: image.uri }}
                  style={styles.selectedImage}
                />
              ))}
            </ScrollView>
          )}
        </View>
      </ScrollView>

      {/* Home and Dashboard buttons (Fixed at the bottom) */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.footerButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate('Dashboard')}
        >
          <Text style={styles.footerButtonText}>Dashboard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'space-between', // Ensures space between the content and footer buttons
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  module: {
    marginBottom: 30,
  },
  moduleTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10,
  },
  newsItem: {
    fontSize: 16,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  selectButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  selectedImage: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  footerButton: {
    padding: 15,
    backgroundColor: '#007BFF',
    borderRadius: 10,
    width: 120, // Adjusting the button width
    alignItems: 'center',
  },
  footerButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default HomeScreen;
