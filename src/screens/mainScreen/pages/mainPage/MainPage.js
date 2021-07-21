import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
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
    <ScrollView contentContainerStyle={{ minHeight: "100%" }}>
      <View
        style={{
          minHeight: "100%",
          paddingHorizontal: 12,
          backgroundColor: color.Bcg,
        }}
      >
        <View style={{ height: "55%" }}>
          <View
            style={{
              height: "68%",
              paddingBottom: 16,
            }}
          />
          <View
            style={{
              flexDirection: "row",
            }}
          >
            {buttons.map((item, index) => (
              <View
                key={index}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 5,
                }}
              >
                <Button
                  title={item}
                  type="sort"
                  action={setSortBy}
                  active={selectedSort}
                />
              </View>
            ))}
          </View>
          <View style={styles.itemTitleContainer}>
            <Text style={styles.itemTitle}>All quadcopters</Text>
          </View>
        </View>

        <View style={{ height: 290 }}>
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
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemTitleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  itemTitle: {
    fontSize: 20,
  },
});
