import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

const HomeScreen = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://demo7324815.mockable.io/available/films')
    .then(response => response.json())
    .then(data => setMovies(data.results));
}, []);

  return(
    <View>
        <Text>Movies</Text>
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>{item.title}</Text>
              <Text>{item.release_date}</Text>
            </View>
          )}
        />
      </View>
  )
};

export default HomeScreen;
