import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // veya FontAwesome, Ionicons, vb.

import styles from './Box.style';

const Box = ({ title, desc, image, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {image && <Image style={styles.image} />}
      <View>
        {title && <Text style={styles.title}>{title}</Text>}
        {desc && <Text style={styles.desc}>{desc}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default Box;
