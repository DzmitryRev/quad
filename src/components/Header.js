import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BurgerIcon } from '../styles/icons/Icons';
import { color } from '../styles/variables';

export const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Quadrojoy</Text>
      <BurgerIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    padding: 20,
    top: 20,
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: color.Bcg,
  },
  text: {
    // fontFamily: 'Lato_400Regular',
    fontSize: 24,
  },
});
