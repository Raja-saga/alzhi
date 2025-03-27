import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const GalleryScreen = ({ navigation }) => {
  // Sample family photos with names (should be loaded from storage)
  const [familyPhotos, setFamilyPhotos] = useState([
    { id: '1', uri: 'https://example.com/photo1.jpg', name: 'Sarah', relation: 'Daughter' },
    { id: '2', uri: 'https://example.com/photo2.jpg', name: 'John', relation: 'Son' },
    { id: '3', uri: 'https://example.com/photo3.jpg', name: 'Mary', relation: 'Wife' },
  ]);

  const addPhoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setFamilyPhotos([...familyPhotos, {
        id: Math.random().toString(),
        uri: result.assets[0].uri,
        name: 'New',
        relation: 'Family'
      }]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={28} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.title}>Family Gallery</Text>
        <TouchableOpacity onPress={addPhoto}>
          <MaterialCommunityIcons name="plus" size={28} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Photo Grid */}
      <FlatList
        data={familyPhotos}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.galleryContainer}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.photoCard}
            onPress={() => navigation.navigate('PhotoDetail', { photo: item })}
          >
            <Image source={{ uri: item.uri }} style={styles.photo} />
            <View style={styles.photoInfo}>
              <Text style={styles.photoName}>{item.name}</Text>
              <Text style={styles.photoRelation}>{item.relation}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Home')}
        >
          <MaterialCommunityIcons name="home" size={28} color="#FFFFFF" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.navButton, styles.activeNavButton]}
          onPress={() => navigation.navigate('Gallery')}
        >
          <MaterialCommunityIcons name="image-multiple" size={28} color="#FFFFFF" />
          <Text style={styles.navText}>Gallery</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1E1E1E',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  galleryContainer: {
    padding: 8,
  },
  photoCard: {
    flex: 1,
    margin: 8,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#1E1E1E',
    elevation: 3,
  },
  photo: {
    width: '100%',
    aspectRatio: 1,
  },
  photoInfo: {
    padding: 10,
  },
  photoName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  photoRelation: {
    color: '#AAAAAA',
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: "#1E1E1E",
    paddingVertical: 12,
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  activeNavButton: {
    borderTopWidth: 3,
    borderTopColor: '#4CAF50',
  },
  navText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 4,
  },
});

export default GalleryScreen;