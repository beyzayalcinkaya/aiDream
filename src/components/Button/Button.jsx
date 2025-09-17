import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './Button.style';
import { SafeAreaView } from 'react-native-safe-area-context';

const Button = ({ value, onChangeText }) => {
  return (
    <SafeAreaView>
      <TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Rüyanızı buraya yazın..."
          placeholderTextColor="rgba(255,255,255,0.5)"
          multiline
          maxLength={100} // en fazla 100 karakter
          value={value}
          onChangeText={onChangeText}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Button;
