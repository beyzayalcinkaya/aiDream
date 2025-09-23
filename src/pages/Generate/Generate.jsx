import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DreamInput from '../../components/DreamInput/DreamInput';
import Button from '../../components/Button';
import styles from './Generate.style';

const Generate = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View style={styles.dreamInputContainer}>
          <DreamInput />
          <Button />
        </View>
        <View style={styles.dreamAnsContainer}>
          {/* buraya dreamcard componenti mi gelsin: kullanıcı yorumla butonuna bastıktan ve loadingten sonra. 
yoksa direkt history sayfasına gidilsin ve orada mı görüntülensin zaten rüya her 
türlü dreamcard yapısının içinde görüntülencek. */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Generate;
