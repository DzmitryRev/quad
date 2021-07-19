import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityBase,
} from "react-native";
import * as RootNavigation from "./RootNavigation";

import {
  CardIcon,
  HomeIcon,
  LikeIcon,
  SearchIcon,
} from "../assets/icons/Icons";
import { color } from "../styles/variables";

export const Footer = () => {
  const Navigate = (id, route) => {
    setActive(id);
    RootNavigation.navigate(route);
  };

  const [active, setActive] = useState(1);

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        onPress={() => Navigate(1, "Main")}
        style={styles.touch}
      >
        <HomeIcon color={active === 1 ? color.Primary : color.Gray} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Navigate(2, "Liked")}
        style={styles.touch}
      >
        <LikeIcon color={active === 2 ? color.Primary : color.Gray} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.touch}>
        <SearchIcon />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Navigate(4, "Card")}
        style={styles.touch}
      >
        <CardIcon color={active === 4 ? color.Primary : color.Gray} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: "11%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 12,
    elevation: 30,
    backgroundColor: color.White,
  },
  touch: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
