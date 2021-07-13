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

export const Footer = ({ screenName }) => {
  const activeColor = '#317AE8';
  const inactiveColor = '#939399';

  const Navigate = (icon, route) => {
    setActive(icon);
    RootNavigation.navigate(route);
  };

  const [active, setActive] = useState(1);

  console.log('render');
  console.log(active);

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => Navigate(1, 'Main')}>
        <HomeIcon color={active === 1 ? activeColor : inactiveColor} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Navigate(2, 'Liked')}>
        <LikeIcon color={active === 2 ? activeColor : inactiveColor} />
      </TouchableOpacity>
      <SearchIcon />
      <TouchableOpacity onPress={() => Navigate(4, 'Card')}>
        <CardIcon color={active === 4 ? activeColor : inactiveColor} />
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
