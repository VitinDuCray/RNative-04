import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function SocialPost() {
  return (
    <View style={styles.postContainer}>
      <Text style={styles.userName}>🤖 lel0uch_ofc</Text>
      <Image 
        source={{ uri: 'https://avatarfiles.alphacoders.com/158/thumb-1920-158178.jpg' }} 
        style={styles.postImage} 
      />
      <Text style={styles.postDescription}>
        O líder da revolução.
      </Text>
      <Text style={styles.postDescription}>
        🤍      💬      🔗
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
    alignItems: 'center',
    justifyContent:'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  postImage: {
    width: 150,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  postDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',

  },
});
