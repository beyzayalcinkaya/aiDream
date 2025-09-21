import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './Settings.style';
import Box from '../../components/Box/Box';
import starIcon from '../../assets/star.png';
import fileIcon from '../../assets/file.png';
import privacyIcon from '../../assets/private.png';
import contactIcon from '../../assets/contact.png';
import languageIcon from '../../assets/language.png';
import logoutIcon from '../../assets/logout.png';
import deleteIcon from '../../assets/delete.png';

const Settings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View style={styles.containerBoxs}>
          <Text style={styles.title}>AYARLAR</Text>
          <Text style={styles.sectionTitle}>Uygulama</Text>
          <Box title="Bizi Değerlendir" imageSource={starIcon} />
          <Box title="Kullanım Koşulları" imageSource={fileIcon} />
          <Box title="Gizlilik Politikası" imageSource={privacyIcon} />
          <Box title="İletişim" imageSource={contactIcon} />
          <Box title="Dil" imageSource={languageIcon} />
          <Text style={styles.sectionTitle}>Hesap</Text>
          <Box title="Çıkış Yap" imageSource={logoutIcon} />
          <Box title="Hesabı Sil" imageSource={deleteIcon} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
