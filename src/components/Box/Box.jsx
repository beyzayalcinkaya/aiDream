import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import styles from './Box.style';

const Box = ({ title, desc, imageSource, onPress, style }) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {imageSource && (
        <View style={styles.imageContainer}>
          <Image source={imageSource} style={styles.image} />
        </View>
      )}

      <View style={styles.textContainer}>
        {title && <Text style={styles.title}>{title}</Text>}
        {desc && <Text style={styles.desc}>{desc}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default Box;
