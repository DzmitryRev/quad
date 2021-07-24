import React from "react";
import {
  View,
  Image,
  StyleSheet,
  PixelRatio,
  Text,
  Dimensions,
} from "react-native";
import { color } from "../styles/variables";
import ban from "../assets/images/Banner.png";

export const Banner = () => {
  return (
    <View style={styles.banner}>
      <Image
        source={ban}
        style={[
          styles.image,
          Dimensions.get("window").height >= 700
            ? styles.imageStandardSreen
            : styles.imageSmallScreen,
        ]}
      ></Image>
      <View style={styles.bannerContent}>
        <Text style={styles.bannerContentTitle}>Need for Speed</Text>
        <Text style={styles.bannerContentItem}>UdoDron 3 Pro</Text>
        <Text style={styles.bannerContentPrice}>1984 $</Text>
      </View>
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
  bannerContent: {
    flex: 1,
    justifyContent: "flex-end",
  },
  bannerContentTitle: {
    color: color.White,
    fontSize: 14,
    zIndex: 1000,
  },
  bannerContentItem: {
    color: color.White,
    fontSize: 24,
    fontWeight: "700",
    zIndex: 1000,
  },
  bannerContentPrice: {
    color: color.White,
    fontSize: 20,
    zIndex: 1000,
  },

  image: {
    position: "absolute",

    right: 0,
    bottom: 0,
  },
  imageSmallScreen: {
    height: 163,
    width: 233,
  },
  imageStandardSreen: {
    height: 163,
    width: 300,
  },
});
