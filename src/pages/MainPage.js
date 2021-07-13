import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { color } from '../styles/variables';

import Quad from '../../assets/Quad.png';
import Quad2 from '../../assets/Quad2.png';
import Quad3 from '../../assets/Quad3.png';
import { Header, Banner, Button, Footer, Item } from '../components';

export const MainPage = (props) => {
  const DATA = [
    {
      image: Quad,
      name: 'DJI Air 2S',
      price: '1424 $',
      rating: '4.2',
    },
    {
      image: Quad2,
      name: 'DJI Mavic Mini',
      price: '990.90 $',
      rating: '4.5',
    },
    {
      image: Quad3,
      name: 'DJI’s Matrice 200',
      price: '2780.30 $',
      rating: '3.8',
    },
  ];
  return (
    <View style={styles.app}>
      <StatusBar style="dark" />
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
        <View style={{ paddingTop: 32, paddingBottom: 32 }}>
          <Banner />
        </View>
        <View
          style={{
            marginBottom: 28,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Button title="All" />
          <Button title="Cheap" />
          <Button title="Best" />
          <Button title="Fast" />
        </View>

        <Text style={{ fontSize: 20, marginBottom: 21 }}>All quadcopters</Text>
        <View
          style={{ display: 'flex', flexDirection: 'row', overflow: 'scroll' }}
        >
          {DATA.map((item) => (
            <Item
              img={item.image}
              name={item.name}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </View>
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
  image: {
    width: 'auto',
  },
});
