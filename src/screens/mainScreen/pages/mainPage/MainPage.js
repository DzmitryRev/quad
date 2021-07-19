import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { color } from "../../../../styles/variables";
import { Banner, Button, Item } from "../../../../components";

const Stack = createStackNavigator();
const RootStack = createStackNavigator();

export const MainPage = ({
  navigation,
  items,
  setSortBy,
  selectedSort,
  buttons,
}) => {
  return (
    <ScrollView style={styles.mainPage}>
      <View style={styles.bannerContainer}>
        <Banner />
      </View>

      <View style={styles.buttonContainer}>
        {buttons.map((item, index) => (
          <Button
            key={index}
            title={item}
            type="sort"
            action={setSortBy}
            active={selectedSort}
          />
        ))}
      </View>

      <View style={styles.itemTitleContainer}>
        <Text style={styles.itemTitle}>All quadcopters</Text>
      </View>

      <ScrollView horizontal={true} style={styles.itemContainer}>
        {items.map((item) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ItemScreen", {
                title: item.name,
                img: item.image,
                price: item.price,
                rating: item.rating,
                description: item.description,
              })
            }
            activeOpacity={0.8}
            key={item.id}
          >
            <Item
              name={item.name}
              img={item.image}
              price={item.price}
              rating={item.rating}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainPage: {
    paddingTop: 32,
    paddingBottom: 28,
    paddingHorizontal: 12,
    backgroundColor: color.Bcg,
  },

  bannerContainer: {
    height: 163,
    marginBottom: 32,
  },

  buttonContainer: {
    marginBottom: 28,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemTitleContainer: {
    height: 24,
    marginBottom: 21,
  },
  itemTitle: {
    fontSize: 20,
  },
  itemContainer: {
    height: 248,
  },
});
