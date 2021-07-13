import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { color } from '../styles/variables';
import { useFonts, Lato_400Regular } from '@expo-google-fonts/lato';
import { StarIcon } from '../styles/icons/Icons';

export const Item = ({ img, price, name, rating, ...props }) => {
  return (
    <View style={styles.item}>
      <Image source={img} style={styles.image}></Image>

      <View style={styles.textContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{price}</Text>
          <View style={styles.ratingContainer}>
            <StarIcon />
            <Text style={styles.rating}>{rating}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    borderRadius: 12,
    backgroundColor: color.White,
    width: 202,
    borderColor: color.Gray_light,
    borderWidth: 1,
    borderStyle: 'solid',
    marginRight: 17,
  },
  image: {
    width: 202,
    height: 168,
  },
  textContainer: {
    paddingTop: 12,
    paddingRight: 18,
    paddingLeft: 18,
    paddingBottom: 18,
  },
  nameContainer: {
    marginBottom: 12,
  },
  name: {
    fontSize: 14,
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
  },
  ratingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  rating: {
    fontSize: 16,
  },
});
