import { Pressable, View, Text, StyleSheet } from 'react-native';
import { color } from '../styles/variables';
import React from 'react';

export const Button = ({
  title,
  action = () => console.log('Error'),
  active,
  type = 'primary',
}) => {
  switch (type) {
    case 'sort':
      return (
        <View style={active === title ? styles.active : styles.inactive}>
          <Pressable onPress={() => action(title)}>
            <Text style={styles.text}>{title}</Text>
          </Pressable>
        </View>
      );
    case 'primary':
      return (
        <View style={styles.primary}>
          <Pressable onPress={() => action()}>
            <Text style={styles.text}>{title}</Text>
          </Pressable>
        </View>
      );
    default:
  }
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 22,
    color: color.White,
    textAlign: 'center',
  },
  active: {
    height: 46,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: color.Primary,
    borderRadius: 12,
    width: '21%',
  },
  inactive: {
    backgroundColor: color.Gray,
    borderRadius: 12,
    display: 'flex',
    justifyContent: 'center',
    width: '21%',
  },
  primary: {
    height: 46,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: color.Primary,
    borderRadius: 12,
    width: '100%',
  }
});
