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
    width: "100%",
    backgroundColor: color.Primary,
    borderRadius: 16,
    height: "100%",
  },
  image: {
    width: "68%",
    height: "100%",
  },
});
