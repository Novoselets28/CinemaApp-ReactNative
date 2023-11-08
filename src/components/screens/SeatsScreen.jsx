import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../constants/theme';

const SeatsScreen = ({ route }) => {
    const [seats, setSeats] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        fetch('https://demo7324815.mockable.io/seats')
            .then((response) => response.json())
            .then((data) => {
                setSeats(data.seats);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <View style={styles.container}>
            {seats.map((seat, index) => (
                <View style={styles.seatBox} key={index}>
                    <Text
                        onPress={() => {
                            navigation.navigate('TicketScreen', {
                                filmPoster: route.params.filmPoster,
                                sessionTime: route.params.sessionTime,
                                selectedDate: route.params.selectedDate,
                                seat: seat,
                            });
                        }}>
                        {seat}
                    </Text>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: COLORS.darkBlue,
        height: '100%'
    },
    seatBox: {
        width: 50, 
        height: 50, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        margin: 20,
    },
});

export default SeatsScreen;
