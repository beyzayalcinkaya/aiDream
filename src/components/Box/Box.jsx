import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Box.style';

const Box = ({
  title,
  desc,
  onPress,
  style,
  //colors = ['#352469', '#280a40'],
  //colors = ['#280a40', '#352469'],
  //colors = ['#352469', '#140436'],
  colors = ['#391d54', '#140436'],
  imageSource,
  imageStyle,
}) => {
  return (
    <LinearGradient
      colors={colors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.gradientBorder, style]}
    >
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={styles.innerBox}
      >
        {imageSource && (
          <View style={styles.imageContainer}>
            <Image source={imageSource} style={[styles.image, imageStyle]} />
          </View>
        )}
        <View style={styles.textContainer}>
          {title && <Text style={styles.title}>{title}</Text>}
          {desc && <Text style={styles.desc}>{desc}</Text>}
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Box;
