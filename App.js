import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { ItemScreenContainer, MainScreen } from "./src/screens";
import { color } from "./src/styles/variables";
import { BackButton, BurgerIcon } from "./src/assets/icons/Icons";

const Stack = createStackNavigator();

export default function App() {
  const defaultHeaderOptions = {
    headerTransparent: false,
    headerStyle: {
      backgroundColor: color.Bcg,
      borderBottomWidth: 0,
    },
    headerTitle: "Quadrojoy",
    headerTitleStyle: {
      fontSize: 24,
    },
    headerRight: () => <BurgerIcon />,
    headerRightContainerStyle: {
      paddingRight: 12,
    },
  };
  const miniHeaderOptions = {
    headerStyle: {
      backgroundColor: color.White,
      borderBottomWidth: 0,
    },
    headerTitle: false,
    headerBackImage: () => <BackButton />,
    headerLeftContainerStyle: {
      paddingLeft: 23,
    },
  };
  return (
    <Provider store={store}>
      <View style={styles.app}>
        <NavigationContainer>
          <Stack.Navigator mode="modal" initialRouteName="MainScreen">
            <Stack.Screen
              name="MainScreen"
              component={MainScreen}
              mode="screen"
              options={defaultHeaderOptions}
            />
            <Stack.Screen
              name="ItemScreen"
              component={ItemScreenContainer}
              options={miniHeaderOptions}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  app: {
    minHeight: "100%",
  },
});
