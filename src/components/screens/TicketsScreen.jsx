import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TicketScreen = ({ route }) => {
  const { filmPoster, sessionTime, selectedDate, seat } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: filmPoster }} style={styles.filmPoster} />
      <Text style={styles.ticketText}>Ticket for {sessionTime} on {selectedDate}</Text>
      <Text>Your seat is {seat}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filmPoster: {
    width: 200,
    height: 300,
    marginBottom: 20,
  },
  ticketText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TicketScreen;
