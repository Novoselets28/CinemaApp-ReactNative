import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { sizes } from '../../constants/theme';

const CARD_WIDTH = sizes.width ;
const CARD_HEIGHT = 200

const MovieDetailsScreen = ({ route }) => {
  const { item } = route.params;
  const [sessions, setSessions] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch('https://demo7324815.mockable.io/available/sessions')
      .then((response) => response.json())
      .then((data) => {
        setSessions(data.sessions);
      })
      .catch((error) => {
        console.error('Error fetching session data:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
        <View style={styles.imageBox}>
          <Image source={{ uri: item.Poster }} style={styles.movieImage} />
        </View>
      <Text>{item.Title}</Text>
      <Text style={styles.sessionTitle}>Session Times:</Text>
      <View style={styles.timeBoxContainer}>
        {sessions.map((session, index) => (
          <View key={index} style={styles.timeBox}>
            <Text
              style={styles.timeText}
              onPress={() => {
                navigation.navigate('MyTickets', {
                  filmPoster: item.Poster,
                  sessionTime: session,
                });
              }}
            >
              {session}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginLeft: 10,
    marginRight: 10,
  },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: sizes.radius,
    overflow: 'hidden'
  },
  movieImage: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    resizeMode: 'cover'
  },
  sessionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    marginTop: 8,
  },
  timeBoxContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
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
});

export default MovieDetailsScreen;
