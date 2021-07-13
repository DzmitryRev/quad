import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BurgerIcon } from '../styles/icons/Icons';
import { color } from '../styles/variables';
import { useFonts, Lato_400Regular } from '@expo-google-fonts/lato';

export const Header = (props) => {
  let fontsLoaded = useFonts({
    Lato_400Regular,
  });
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
    fontFamily: 'Lato_400Regular',
    fontSize: 24,
  },
});
