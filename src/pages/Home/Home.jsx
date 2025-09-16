import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './Home.style';
import Box from '../../components/Box/Box';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        {/* 
        BURAYA PREMİMUM OLUP OLMADIĞINI BİLDİREN KUTUCUK GELECEK.
        TEXT İLE ALTLI ÜSTÜ OLACAKLAR. 
         */}
        <Text style={styles.title}>
          RÜYANI ANLAT, YAPAY ZEKA SANA NE ANLAMA GELDİĞİNİ SÖYLESİN
        </Text>
      </View>
      <Box
        title="Rüyanı Anlat"
        desc="Yapay zeka sana yorumlasın"
        onPress={() => console.log('deneme')}
        style={styles.singleBox}
      />
      <View style={styles.row}>
        <Box
          title="Geçmiş"
          desc="Önceki yorumlar"
          onPress={() => console.log('deneme2')}
          style={styles.halfBox}
        />
        <Box
          title="Profil"
          desc="Ayarlar ve bilgiler"
          onPress={() => console.log('deneme3')}
          style={styles.halfBox}
        />
      </View>
      <View style={styles.row}>
        <Box
          title="Geçmiş"
          desc="Önceki yorumlar"
          onPress={() => console.log('deneme2')}
          style={styles.halfBox}
        />

        <Box
          title="Profil"
          desc="Ayarlar ve bilgiler"
          onPress={() => console.log('deneme3')}
          style={styles.halfBox}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
