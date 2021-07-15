import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import * as RootNavigation from '../RootNavigation';

import {
  CardIcon,
  HomeIcon,
  LikeIcon,
  SearchIcon,
} from '../styles/icons/Icons';
import { color } from '../styles/variables';

export const Footer = () => {
  const Navigate = (id, route) => {
    setActive(id);
    RootNavigation.navigate(route);
  };

  const [active, setActive] = useState(1);

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => Navigate(1, 'Main')}>
        <HomeIcon color={active === 1 ? color.Primary : color.Gray} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Navigate(2, 'Liked')}>
        <LikeIcon color={active === 2 ? color.Primary : color.Gray} />
      </TouchableOpacity>
      <SearchIcon />
      <TouchableOpacity onPress={() => Navigate(4, 'Card')}>
        <CardIcon color={active === 4 ? color.Primary : color.Gray} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 12,
    elevation: 30,
    backgroundColor: color.White,
    width: '100%',
    paddingBottom: 40,
    paddingTop: 24,
    paddingLeft: 40,
    paddingRight: 40,
    position: 'absolute',
    bottom: 0,
    zIndex: 100,
  },
});
