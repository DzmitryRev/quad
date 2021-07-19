import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { BurgerIcon } from "../assets/icons/Icons";

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Quadrojoy</Text>
      <BurgerIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 24,
  },
});
