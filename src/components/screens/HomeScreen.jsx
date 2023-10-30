import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, Image, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://demo7324815.mockable.io/available/films')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setMovies(data.list))
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Actual Films</Text>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.movieContainer}>
            <Image source={{ uri: item.Poster }} style={styles.movieImage} />
            <Text style={styles.movieTitle}>{item.Title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  movieContainer: {
    marginBottom: 16,
  },
  movieImage: {
    width: '100%',
    height: 300,
    borderRadius: 8,
  },
  movieTitle: {
    fontSize: 18,
    marginTop: 8,
  },
});

export default HomeScreen;
