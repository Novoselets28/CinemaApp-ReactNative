import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const SeatsScreen = () => {
    const [seats, setSeats] = useState([]);

    // useEffect(()=> {
    //     fetch('https://demo7324815.mockable.io/seats')
    //     .then((response) => response.json())
    //     .then((data) => {
    //         setSeats(data.seats);
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     });
    // }, [])

  return (
    <View>
      <Text>
        {/* {
        seats.map((seat)=> {
            <View>
                <Text>{seat}</Text>
            </View>
        })
        } */}Screen
        </Text>
    </View>
  )
}

export default SeatsScreen

const styles = StyleSheet.create({})