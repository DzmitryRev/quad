import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';
import { store } from './src/redux/store';

import { navigationRef } from './src/RootNavigation';

import { Footer } from './src/components';
import { CardPage, ItemPage, LikePage, MainPageContainer } from './src/pages';

const Stack = createStackNavigator();

export default function App(props) {
  return (
    <Provider store={store}>
      <>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen
              name="Main"
              component={MainPageContainer}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Card" component={CardPage} />
            <Stack.Screen name="Liked" component={LikePage} />
            <Stack.Screen name="Item" component={ItemPage} />
          </Stack.Navigator>
        </NavigationContainer>
        <Footer />
      </>
    </Provider>
  );
}
