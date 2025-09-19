import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './DreamInput.style';
const DreamInput = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.dreamInputContainer}>
      <TextInput
        style={styles.dreamInput}
        value={text}
        onChangeText={setText}
        placeholder="Rüyanızı detaylı bir şekilde bu alana giriniz..."
        placeholderTextColor="gray"
        maxLength={200}
        multiline={true}
        numberOfLines={4}
        editable={true}
        autoFocus={false}
      />
      <Text style={styles.counter}>{text.length} / 200</Text>
    </View>
  );
};

export default DreamInput;
