import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './Settings.style';
import Box from '../../components/Box/Box';

const Settings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.containerBoxs}>
          <Text style={styles.title}>Uygulama</Text>
          <Box title="Bizi Değerlendir" />
          <Box title="Kullanım Koşulları" />
          <Box title="Gizlilik Politikası" />
          <Box title="İletişim" />
          <Box title="Dil" />
          <Text style={styles.title}>Hesap</Text>
          <Box title="Çıkış Yap" />
          <Box title="Hesabı Sil" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
