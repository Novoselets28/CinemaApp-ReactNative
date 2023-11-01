import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';

const HomeScreen = () => {
  const [movies, setMovies] = useState([]);
  const [availableDates, setAvailableDates] = useState({});
  const [searchText, setSearchText] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch('https://demo7324815.mockable.io/available/films')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setMovies(data.list);
        setFilteredMovies(data.list);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const getAvailableDates = async (filmId) => {
    try {
      const response = await fetch(`https://demo7324815.mockable.io/api/sessions?filmId=${filmId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.dates || [];
    } catch (error) {
      console.error('Error fetching available dates:', error);
      return [];
    }
  };

  useEffect(() => {
    const datesPromises = movies.map((movie) =>
      getAvailableDates(movie.id).then((dates) => {
        setAvailableDates((prevDates) => ({ ...prevDates, [movie.id]: dates }));
      })
    );
    Promise.all(datesPromises).catch((error) => {
      console.error('Error fetching available dates for all movies:', error);
    });
  }, [movies]);

  useEffect(() => {
    const filtered = movies.filter((movie) =>
      movie.Title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [searchText, movies]);

  const formatDateToDayOfWeek = (dateString) => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const date = new Date(dateString);
    const dayOfWeek = daysOfWeek[date.getUTCDay()];
    const dayOfMonth = date.getDate();

    return `${dayOfWeek} ${dayOfMonth}`;
  };

  const renderMovieItem = (item) => {
  
    return (
      <TouchableOpacity onPress={() => {
        navigation.navigate('MovieDetailsScreen', {item})
      }}>
        <View style={styles.movieContainer}>
          <Image source={{ uri: item.Poster }} resizeMode="cover" style={styles.movieImage} />
          <Text style={styles.movieTitle}>{item.Title}</Text>
          <View style={styles.movieDetails}>
            <View style={styles.dateContainer}>
              {availableDates[item.id]?.map((date, index) => (
                <View key={index} style={styles.dateBox}>
                  <Text style={styles.dateText}>
                    {formatDateToDayOfWeek(date)}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Actual Films</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList
        data={filteredMovies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => renderMovieItem(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  movieContainer: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 16,
  },
  movieImage: {
    flex: 1,
    justifyContent: 'flex-end',
    height: 200,
    marginBottom: 4,    
  },
  movieDetails: {
    display: 'flex',
    marginLeft: 10,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingLeft: 10,
    color: '#000',
  },
  dateContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dateBox: {
    backgroundColor: 'blue',
    padding: 4,
    borderRadius: 4,
    marginRight: 4,
    marginBottom: 4,
  },
  dateText: {
    fontSize: 14,
    color: 'white',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingLeft: 8,
    borderRadius: 10,
  },
});

export default HomeScreen;
