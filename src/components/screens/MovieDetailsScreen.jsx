import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { sizes } from '../../constants/theme';

const CARD_WIDTH = sizes.width - 20;
const CARD_HEIGHT = 200;

const MovieDetailsScreen = ({ route }) => {
  const { item, isDate, selectedDate, filmTitle } = route.params;
  const [filmDetails, setFilmDetails] = useState(null);
  const [sessions, setSessions] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch('https://demo7324815.mockable.io/session-details')
      .then((response) => response.json())
      .then((data) => {
        const selectedFilm = data.films.find((film) => film.title === filmTitle);
        setFilmDetails(selectedFilm);
      })
      .catch((error) => {
        console.error('Error fetching film details:', error);
      });

    if (isDate) {
      fetch('https://demo7324815.mockable.io/available/sessions')
        .then((response) => response.json())
        .then((data) => {
          setSessions(data.sessions);
        })
        .catch((error) => {
          console.error('Error fetching session data:', error);
        });
    }
  }, [isDate, selectedDate, filmTitle]);

  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image source={{ uri: item.Poster }} style={styles.movieImage} />
      </View>
      <Text style={styles.movieTitle}>{item.Title}</Text>
      {!isDate && filmDetails && (
        <View style={styles.filmDetailsContainer}>
          <Text style={styles.filmDetailsText}>{filmDetails.descr}</Text>
        </View>
      )}
      {isDate && (
        <View style={styles.timeBoxContainer}>
          {sessions.map((session, index) => (
            <View key={index} style={styles.timeBox}>
              <Text
                style={styles.timeText}
                onPress={() => {
                  navigation.navigate('SeatsScreen', {
                    filmPoster: item.Poster,
                    sessionTime: session,
                    selectedDate: selectedDate,
                  });
                }}
              >
                {session}
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: CARD_WIDTH,
    margin: 10
  },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: sizes.radius,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  movieImage: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    resizeMode: 'cover',
  },
  movieTitle: {
    position: 'absolute',
    top: CARD_HEIGHT - 80,
    left: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  timeBoxContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  timeBox: {
    backgroundColor: 'yellow',
    padding: 8,
    margin: 4,
    borderRadius: 4,
  },
  timeText: {
    color: 'black',
  },
  filmDetailsContainer: {
    marginTop: 20,
    padding: 10,
  },
  filmDetailsText: {
    fontSize: 16,
    color: 'black',
  },
});

export default MovieDetailsScreen;
