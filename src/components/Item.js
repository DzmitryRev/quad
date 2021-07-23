import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

import { StarIcon } from "../assets/icons/Icons";

import { color } from "../styles/variables";

export const Item = ({ img, price, name, rating, ...props }) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: img,
        }}
        style={styles.image}
      ></Image>

      <View style={styles.textContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>

        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>
            {" "}
            <StarIcon />
            {rating}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    display: "flex",
    justifyContent: "space-between",
    borderRadius: 12,
    backgroundColor: color.White,
    borderColor: color.Gray_light,
    width: 204,
    height: 248,
    borderWidth: 1,
    borderStyle: "solid",
    marginRight: 17,
  },
  image: {
    width: 202,
    height: 168,
  },
  textContainer: {
    height: "33%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
  },
  nameContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: 16,
    paddingTop: 12,
  },
  name: {
    fontSize: 14,
  },
  price: {
    fontSize: 16,
  },
  ratingContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    paddingBottom: 16,
  },

  rating: {
    fontSize: 16,
  },
});
