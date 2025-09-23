import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Box from '../../components/Box/Box';
import blogData from '../../data/blogData.json';
import styles from './Home.style';

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View style={styles.topContainer}>
          {/* 
        BURAYA PREMİMUM OLUP OLMADIĞINI BİLDİREN KUTUCUK GELECEK.
        TEXT İLE ALTLI ÜSTÜ OLACAKLAR. ya da premium baloncuğu iconu falan bilmiyorum 
         */}
          <Text style={styles.title}>
            RÜYANI ANLAT, {'\n'} YAPAY ZEKA AÇIKLASIN
          </Text>
        </View>
        <View style={styles.boxs}>
          <Box
            title="Rüyanda ne gördün?"
            desc="Yapay zekanın detaylı ve eksiksiz analiz edebilmesi için hatırladığınız bütün ayrıntıları girin..."
            onPress={() => navigation.navigate('Generate')}
            style={styles.singleBox}
          />
          <View style={styles.row}>
            <Box
              title="Sigmund Freud"
              desc="Sigmund Freud yorumlasın..."
              onPress={() => navigation.navigate('Generate')}
              style={styles.halfBox}
            />
            <Box
              title="Din"
              desc="Rüyam Dini Açıdan Yorumlansın..."
              onPress={() => navigation.navigate('Generate')}
              style={styles.halfBox}
            />
          </View>
          <View style={styles.row}>
            <Box
              title="Ezoterik"
              desc="Astroloji, Ruhsal, Enerji, Işaretler..."
              onPress={() => navigation.navigate('Generate')}
              style={styles.halfBox}
            />

            <Box
              title="Kültürel"
              desc="Kültürel Açıdan Rüya Yorumla"
              onPress={() => navigation.navigate('Generate')}
              style={styles.halfBox}
            />
          </View>
        </View>
        <View style={styles.dreamTells}>
          <Text style={styles.dreamTellsText}>RÜYALARIN SANA NE ANLATIYOR</Text>
          <View style={styles.dreamTellsBox}>
            {blogData.map(item => (
              <Box
                key={item.id}
                title={item.title}
                desc={item.desc}
                onPress={() => navigation.navigate('Blog', { id: item.id })}
                style={styles.dreamTellsOption}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
