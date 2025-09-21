import React from 'react';
import { Text, View } from 'react-native';

import styles from './DreamCard.style';

const DreamCard = ({ title, dream, answer }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>RÜYAN</Text>
          <Text style={styles.dreamDesc}>{dream}</Text>
        </View>

        <View style={styles.line} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Yapay Zeka Yorumu</Text>
          <Text style={styles.answerDesc}>{answer}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.dateText}>2 gün önce</Text>
      </View>
    </View>
  );
};

export default DreamCard;
