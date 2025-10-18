import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './Settings.style';
import Box from '../../components/Box/Box';
import LanguageSelector from '../../components/LanguageSelector';
import starIcon from '../../assets/star.png';
import fileIcon from '../../assets/file.png';
import privacyIcon from '../../assets/private.png';
import contactIcon from '../../assets/contact.png';
import languageIcon from '../../assets/language.png';
import logoutIcon from '../../assets/logout.png';
import deleteIcon from '../../assets/delete.png';

const Settings = () => {
  const [isLanguageSelectorVisible, setIsLanguageSelectorVisible] =
    useState(false);

  const handleLanguagePress = () => {
    setIsLanguageSelectorVisible(true);
  };

  const handleLanguageSelect = language => {
    console.log('Selected language:', language);
    setIsLanguageSelectorVisible(false);
  };

  const handleCloseLanguageSelector = () => {
    setIsLanguageSelectorVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View style={styles.containerBoxs}>
          <Text style={styles.sectionTitle}>Uygulama</Text>
          <Box
            title="Bizi Değerlendir"
            imageSource={starIcon}
            imageStyle={{ width: 25, height: 25 }}
          />
          <Box
            title="Kullanım Koşulları"
            imageSource={fileIcon}
            imageStyle={{ width: 25, height: 25 }}
          />
          <Box
            title="Gizlilik Politikası"
            imageSource={privacyIcon}
            imageStyle={{ width: 25, height: 25 }}
          />
          <Box
            title="İletişim"
            imageSource={contactIcon}
            imageStyle={{ width: 25, height: 25 }}
          />
          <Box
            title="Dil"
            imageSource={languageIcon}
            onPress={handleLanguagePress}
            imageStyle={{ width: 25, height: 25 }}
          />
          {/* buraya premiumla ilgili bir şey gelebilir. */}
        </View>
      </ScrollView>

      <LanguageSelector
        visible={isLanguageSelectorVisible}
        onClose={handleCloseLanguageSelector}
        onLanguageSelect={handleLanguageSelect}
      />
    </SafeAreaView>
  );
};

export default Settings;
