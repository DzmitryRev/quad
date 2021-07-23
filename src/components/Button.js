import React from "react";
import {
  Pressable,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { color } from "../styles/variables";

export const Button = ({
  title,
  action = () => console.log("Error"),
  selectedSort,
  type = "primary",
}) => {
  switch (type) {
    case "sort":
      return (
        <View
          style={[
            styles.button,
            selectedSort === title ? styles.primary : styles.ghost,
          ]}
        >
          <Pressable onPress={() => action(title)}>
            <Text style={styles.text}>{title}</Text>
          </Pressable>
        </View>
      );
    case "primary":
      return (
        <View style={[styles.button, styles.primary]}>
          <TouchableOpacity onPress={() => action()}>
            <Text style={styles.text}>{title}</Text>
          </TouchableOpacity>
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
    textAlign: "center",
  },
  button: {
    height: 46,
    display: "flex",
    justifyContent: "center",
    borderRadius: 12,
    width: "100%",
  },
  primary: {
    backgroundColor: color.Primary,
  },
  ghost: {
    backgroundColor: color.Gray,
  },
});
