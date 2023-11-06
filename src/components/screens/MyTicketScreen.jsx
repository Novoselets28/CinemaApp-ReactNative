import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyTicketScreen = () => {
  const [ticketData, setTicketData] = useState(null);

  const fetchTicket = async () => {
    try {
      const storedTicket = await AsyncStorage.getItem('ticket');
      if (storedTicket) {
        const parsedTicket = JSON.parse(storedTicket);
        setTicketData(parsedTicket);
      }
    } catch (error) {
      console.error('Error fetching ticket:', error);
    }
  };

  useEffect(() => {
    fetchTicket();
  }, []);

  return (
    <View style={styles.container}>
      {ticketData ? (
        <>
          <Image source={{ uri: ticketData.filmPoster }} style={styles.filmPoster} />
          <Text style={styles.ticketText}>
            Ticket for {ticketData.sessionTime} on {ticketData.selectedDate}
          </Text>
          <Text>Your seat is {ticketData.seat}</Text>
        </>
      ) : (
        <Text>No ticket data available</Text>
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

export default MyTicketScreen;
