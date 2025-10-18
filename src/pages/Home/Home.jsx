import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Box from '../../components/Box/Box';
import blogData from '../../data/blogData.json';
import GradientText from '../../components/GradientText/GradientText';
import sigmund from '../../assets/sigmund.png';
import religion from '../../assets/religion.png';
import ezoterik from '../../assets/ezoterik.png';
import culture from '../../assets/culture.png';
import styles from './Home.style';
const imageMap = {
  'key.png': require('../../assets/key.png'),
  'snake.png': require('../../assets/snake.png'),
  'fish.png': require('../../assets/fish.png'),
  'dog.png': require('../../assets/dog.png'),
};

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View style={styles.topContainer}>
          <GradientText
            text={`Rüyanı anlat, \nYapay zeka yorumlasın...`}
            style={styles.title}
            colors={['#fff', '#8f14b8']}
          />
        </View>
        <View style={styles.boxs}>
          <Box
            title="Rüyanda ne gördün?"
            desc="Yapay zekanın detaylı ve eksiksiz analiz edebilmesi için hatırladığınız bütün ayrıntıları girin..."
            onPress={() =>
              navigation.navigate('Generate', { category: 'normal' })
            }
            style={styles.singleBox}
          />

          <Box
            imageSource={sigmund}
            title="Sigmund Freud"
            desc="Sigmund Freud yorumlasın..."
            onPress={() =>
              navigation.navigate('Generate', { category: 'freud' })
            }
            style={styles.halfBox}
          />
          <Box
            imageSource={religion}
            title="Din"
            desc="Rüyam Dini Açıdan Yorumlansın..."
            onPress={() =>
              navigation.navigate('Generate', { category: 'religion' })
            }
            style={styles.halfBox}
          />
          <Box
            imageSource={ezoterik}
            title="Ezoterik"
            desc="Astroloji, Ruhsal, Enerji, Işaretler..."
            onPress={() =>
              navigation.navigate('Generate', { category: 'esoteric' })
            }
            style={styles.halfBox}
          />
          <Box
            imageSource={culture}
            title="Kültürel"
            desc="Kültürel Açıdan Rüya Yorumla"
            onPress={() =>
              navigation.navigate('Generate', { category: 'cultural' })
            }
            style={styles.halfBox}
          />
        </View>
        <View style={styles.dreamTells}>
          <GradientText
            text={`Rüyalardaki simgeler \nne anlama gelir?`}
            style={styles.dreamTellsText}
            colors={['#fff', '#3c105c']}
          />
          <View style={styles.dreamTellsBox}>
            {blogData.map(item => (
              <Box
                key={item.id}
                title={item.title}
                desc={item.desc}
                imageSource={imageMap[item.image]}
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
