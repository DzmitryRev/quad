import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { color } from '../styles/variables';

export const ItemPage = (props) => {
  return (
    <View style={styles.container}>
      <Text>Card Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.Bcg,
    height: '100%',
    paddingTop: 30,
  },
});
