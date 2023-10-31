import React from 'react';
import { View, Text, Image } from 'react-native';

const TicketScreen = ({ route }) => {
  const { movie } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
        Ticket for {movie.Title} 
      </Text>
      <Image
        source={{ uri: movie.Poster }}
        style={{
            height: '60%',
            aspectRatio: 2 / 3,
            backgroundColor: 'gray',
            borderRadius: 15,
            marginRight: 20,
          }}
      />
    </View>
  );
};

export default TicketScreen;
