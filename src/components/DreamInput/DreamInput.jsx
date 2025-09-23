import React from 'react';
import { TextInput, View, Text } from 'react-native';
import styles from './DreamInput.style';
const DreamInput = ({ value, onChangeText }) => {
  return (
    <View style={styles.dreamInputContainer}>
      <TextInput
        style={styles.dreamInput}
        value={value}
        onChangeText={onChangeText}
        placeholder="Rüyanızı detaylı bir şekilde bu alana giriniz..."
        placeholderTextColor="gray"
        maxLength={200}
        multiline={true}
        numberOfLines={4}
        editable={true}
        autoFocus={false}
      />
      <Text style={styles.counter}>{value.length} / 200</Text>
    </View>
  );
};

export default DreamInput;
