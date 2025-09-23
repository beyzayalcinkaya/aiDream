import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import styles from './LanguageSelector.style';

const LanguageSelector = ({ visible, onClose, onLanguageSelect }) => {
  const languages = [
    { id: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { id: 'en', name: 'English', flag: '🇺🇸' },
  ];

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <TouchableOpacity 
          style={styles.backdrop} 
          activeOpacity={1} 
          onPress={onClose}
        />
        <View style={styles.container}>
          <View style={styles.handle} />
          <Text style={styles.title}>Dil Seçimi</Text>
          
          {languages.map((language) => (
            <TouchableOpacity
              key={language.id}
              style={styles.languageItem}
              onPress={() => onLanguageSelect(language)}
              activeOpacity={0.7}
            >
              <Text style={styles.flag}>{language.flag}</Text>
              <Text style={styles.languageName}>{language.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
};

export default LanguageSelector;
