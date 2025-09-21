import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import DreamCard from '../../components/DreamsCard';
import styles from './History.style';
import { ScrollView } from 'react-native';

const History = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <DreamCard title="deneme" dream="deneme" answer="deneme" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default History;
