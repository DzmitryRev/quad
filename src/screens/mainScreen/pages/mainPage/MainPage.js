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
    <View style={styles.mainPage}>
      <ScrollView contentContainerStyle={{ minHeight: "100%" }}>
        <View style={styles.topPannelContainer}>
          <View style={styles.bannerContainer}>
            <Banner />
          </View>
          <View style={styles.buttonsContainer}>
            {buttons.map((item, index) => (
              <View key={index} style={styles.buttonBlock}>
                <Button
                  title={item}
                  type="sort"
                  action={setSortBy}
                  selectedSort={selectedSort}
                />
              </View>
            ))}
          </View>
          <View style={styles.itemTitleContainer}>
            <Text style={styles.itemTitle}>All quadcopters</Text>
          </View>
        </View>

        <View style={styles.itemsContainer}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.itemContainer}
          >
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
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainPage: {
    paddingHorizontal: 12,
    backgroundColor: color.Bcg,
    minHeight: "100%",
  },
  topPannelContainer: {
    height: "55%",
  },
  bannerContainer: {
    height: "68%",
    paddingBottom: 32,
    paddingTop: 22,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonBlock: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  itemTitleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  itemsContainer: {
    height: 290,
    marginBottom: 40,
  },
});
