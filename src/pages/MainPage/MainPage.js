import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { color } from '../../styles/variables';

import { Header, Banner, Button, Item } from '../../components';

export const MainPage = ({
  navigation,
  items,
  setSortBy,
  active,
  ...props
}) => {
  console.log(items);
  return (
    <View style={styles.app}>
      <Header />

      <View
        style={{
          paddingLeft: 12,
          paddingRight: 12,
          paddingTop: 64,
          paddingBottom: 28,
          minHeight: '100%',
        }}
      >
        <View style={styles.bannerContainer}>
          <Banner />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="All" action={setSortBy} active={active} />
          <Button title="Cheap" action={setSortBy} active={active} />
          <Button title="Best" action={setSortBy} active={active} />
          <Button title="Fast" action={setSortBy} active={active} />
        </View>

        <Text style={styles.itemTitle}>All quadcopters</Text>

        <ScrollView horizontal={true}>
          {items.map((item) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Item')}
              activeOpacity={0.8}
              key={item.id}
            >
              <Item
                img={item.image}
                name={item.name}
                price={item.price}
                rating={item.rating}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    backgroundColor: color.Bcg,
    height: '100%',
    paddingTop: 30,
  },
  bannerContainer: {
    paddingTop: 32,
    paddingBottom: 32,
  },
  buttonContainer: {
    marginBottom: 28,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontSize: 20,
    marginBottom: 21,
  },
});
