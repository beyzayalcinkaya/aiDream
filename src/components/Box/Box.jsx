import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';

import styles from './Box.style';

const Box = ({ title, desc, image, onPress, style, column }) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {image && <Image style={styles.image} />}
      <View style={styles.textContainer}>
        {title && <Text style={styles.title}>{title}</Text>}
        {desc && <Text style={styles.desc}>{desc}</Text>}
        {column && <Text style={styles.column}>{column}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default Box;
