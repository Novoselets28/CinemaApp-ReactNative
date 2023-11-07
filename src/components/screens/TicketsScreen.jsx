import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const TicketScreen = ({ route }) => {
  const { filmPoster, sessionTime, selectedDate, seat } = route.params || {};
  const navigation = useNavigation();

  const [ticketSaved, setTicketSaved] = useState(false);

  const saveTicket = async () => {
    try {
      const newTicketData = {
        filmPoster,
        sessionTime,
        selectedDate,
        seat,
      };

      await AsyncStorage.setItem('ticket', JSON.stringify(newTicketData));
      setTicketSaved(true);
    } catch (error) {
      console.error('Error saving ticket:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: filmPoster }} style={styles.filmPoster} />
      <Text style={styles.ticketText}>
        Ticket for {sessionTime} on {selectedDate}
      </Text>
      <Text>Your seat is {seat}</Text>
      {ticketSaved ? (
        <Button title="Home" onPress={() => navigation.navigate('HomeScreen')} />
      ) : (
        <Button title="Save Ticket" onPress={saveTicket} />
      )}
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
