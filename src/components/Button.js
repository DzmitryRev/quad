import { Pressable, View, Text, StyleSheet } from 'react-native';
import { color } from '../styles/variables';
import React from 'react';

export const Button = ({ title }) => {
  return (
    <View>
      <Pressable style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: color.Primary,
    borderRadius: 12,
    padding: 16,
    minWidth: 83,
  },
  text: {
    fontFamily: 'Lato_400Regular',
    fontSize: 16,
    lineHeight: 22,
    color: color.White,
    textAlign: 'center',
  },
});
