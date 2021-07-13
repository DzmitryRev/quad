import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainPage } from './src/pages/MainPage';
import { CardPage } from './src/pages/CardPage';
import { LikePage } from './src/pages/LikePage';
import { Footer } from './src/components';
import { navigationRef } from './src/RootNavigation';

const Stack = createStackNavigator();

export default function App(props) {
  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            name="Main"
            component={MainPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Card" component={CardPage} />
          <Stack.Screen name="Liked" component={LikePage} />
        </Stack.Navigator>
      </NavigationContainer>
      <Footer />
    </>
  );
}
