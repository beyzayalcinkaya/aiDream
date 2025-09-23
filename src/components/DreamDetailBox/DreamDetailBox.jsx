import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './DreamDetailBox.style';

const Box = ({ cardTitle, paragraph, style }) => {
  return (
    <View style={[styles.card, style]}>
      <Text style={styles.cardTitle}>{cardTitle}</Text>

      {paragraph && <Text style={styles.paragraph}>{paragraph}</Text>}
    </View>
  );
};

export default Box;
