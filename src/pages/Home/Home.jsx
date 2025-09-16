import React from 'react';
import { Image, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './Home.style';
import Box from '../../components/Box/Box';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.topContainer}>
          {/* 
        BURAYA PREMİMUM OLUP OLMADIĞINI BİLDİREN KUTUCUK GELECEK.
        TEXT İLE ALTLI ÜSTÜ OLACAKLAR. 
         */}
          <Text style={styles.title}>
            RÜYANI ANLAT, {'\n'} YAPAY ZEKA AÇIKLASIN
          </Text>
        </View>
        <View style={styles.boxs}>
          <Box
            title="Rüyanda ne gördün?"
            desc="Yapay zekanın detaylı ve eksiksiz analiz edebilmesi için hatırladığınız bütün ayrıntıları girin..."
            onPress={() => console.log('deneme')}
            style={styles.singleBox}
          />
          <View style={styles.row}>
            <Box
              title="Sigmund Freud"
              desc="Sigmund Freud yorumlasın..."
              onPress={() => console.log('deneme2')}
              style={styles.halfBox}
            />
            <Box
              title="Din"
              desc="Rüyam Dini Açıdan Yorumlansın..."
              onPress={() => console.log('deneme3')}
              style={styles.halfBox}
            />
          </View>
          <View style={styles.row}>
            <Box
              title="Ezoterik"
              desc="Astroloji, Ruhsal, Enerji, Işaretler..."
              onPress={() => console.log('deneme2')}
              style={styles.halfBox}
            />

            <Box
              title="Kültürel"
              desc="Kültürel Açıdan Rüya Yorumla"
              onPress={() => console.log('deneme3')}
              style={styles.halfBox}
            />
          </View>
        </View>
        <View style={styles.dreamTells}>
          <Text style={styles.dreamTellsText}>RÜYALARIN SANA NE ANLATIYOR</Text>
          <View style={styles.dreamTellsBox}>
            <Box
              title="Rüyada Yılan Görmek"
              desc="Çoğunlukla düşman, gizli tehdit veya kıskançlık..."
              onPress={() => console.log('deneme3')}
              style={styles.dreamTellsOption}
            />
            <Box
              title="Rüyada Balık Görmek"
              desc="Genelde kısmet, rızık ve bereketle ilişkilendirilir..."
              onPress={() => console.log('deneme3')}
              style={styles.dreamTellsOption}
            />
            <Box
              title="Rüyada Köpek Görmek"
              desc="Sadakat, dostluk ve koruyuculuk anlamına gelir.."
              onPress={() => console.log('deneme3')}
              style={styles.dreamTellsOption}
            />
            <Box
              title="Rüyada Bebek Görmek"
              desc="Yeni başlangıçlar, masumiyet ve umut demektir..."
              onPress={() => console.log('deneme3')}
              style={styles.dreamTellsOption}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
