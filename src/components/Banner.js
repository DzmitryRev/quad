import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { color } from "../styles/variables";
import ban from "../assets/images/Banner.png";

export const Banner = () => {
  return (
    <View style={styles.banner}>
      <Image source={ban} style={styles.image}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    backgroundColor: color.Primary,
    borderRadius: 16,
    height: "100%",
    padding: 20,
  },
  image: {
    position: "absolute",
    right: 0,
    width: "100%",
    height: "100%",
  },
});
