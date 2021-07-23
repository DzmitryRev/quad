import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { CardPage, LikePage, MainPageContainer } from "./pages";
import { SearchPage } from "./pages/searchPage/SearchPage";
import {
  CardIcon,
  HomeIcon,
  LikeIcon,
  SearchIcon,
} from "../../assets/icons/Icons";

import { color } from "../../styles/variables";

const Tab = createBottomTabNavigator();

export const MainScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      tabBarOptions={{
        activeTintColor: color.Primary,
        showLabel: false,
        style: {
          height: "11%",
          borderRadius: 12,
          elevation: 30,
          backgroundColor: color.White,
        },
      }}
    >
      <Tab.Screen
        name="MainPage"
        component={MainPageContainer}
        options={{
          tabBarIcon: ({ color }) => <HomeIcon name="home" color={color} />,
        }}
      />
      <Tab.Screen
        name="LikePage"
        component={LikePage}
        options={{
          tabBarIcon: ({ color }) => <LikeIcon name="like" color={color} />,
        }}
      />
      <Tab.Screen
        name="SearchPage"
        component={SearchPage}
        options={{
          tabBarIcon: ({ color }) => <SearchIcon name="search" color={color} />,
        }}
      />
      <Tab.Screen
        name="CardPage"
        component={CardPage}
        options={{
          tabBarIcon: ({ color }) => <CardIcon name="card" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};
