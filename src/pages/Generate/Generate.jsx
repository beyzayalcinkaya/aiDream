import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DreamInput from '../../components/DreamInput/DreamInput';
import Button from '../../components/Button';
import DreamCard from '../../components/DreamsCard';
import styles from './Generate.style';

const Generate = () => {
  const [dreamText, setDreamText] = useState('');
  const [submittedDream, setSubmittedDream] = useState(null);

  const handleSubmit = () => {
    if (dreamText.trim() === '') return;
    setSubmittedDream(dreamText);
    setDreamText('');
  };

  {
    /* const handleSubmit = async () => {
  if (dreamText.trim() === '') return;

  try {
    const response = await fetch("http://localhost:5000/dream", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dream: dreamText }),
    });

    const data = await response.json();
    setSubmittedDream(dreamText); // DreamCard'daki dream kısmı
    setAnswer(data.answer);       // DreamCard'daki answer kısmı
    setDreamText('');             
  } catch (error) {
    console.error(error);
  }
}; */
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View style={styles.dreamInputContainer}>
          <DreamInput value={dreamText} onChangeText={setDreamText} />
          <Button onPress={handleSubmit} />
        </View>
        <View style={styles.dreamAnsContainer}>
          {/* buraya dreamcard componenti mi gelsin: kullanıcı yorumla butonuna bastıktan ve loadingten sonra. 
yoksa direkt history sayfasına gidilsin ve orada mı görüntülensin zaten rüya her 
türlü dreamcard yapısının içinde görüntülencek. */}
          {submittedDream && (
            <DreamCard title="Rüya Yorumu" dream={submittedDream} answer="" />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Generate;
