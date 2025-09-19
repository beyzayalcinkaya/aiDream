import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './Button.style';

const Button = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>YORUMLA</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
