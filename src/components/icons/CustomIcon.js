import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CustomVideoIcon = () => {
  return (
    <Text style={styles.videoIcon}>
      ▶️
    </Text>
  );
};

const styles = StyleSheet.create({
  videoIcon: {
    fontSize: 32,
  },
});

export default CustomVideoIcon;
