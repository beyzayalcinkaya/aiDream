import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import blogData from '../../data/blogData.json';
import DreamDetailBox from '../../components/DreamDetailBox';
import styles from './Blog.style';

const Blog = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params;
  const item = blogData.find(b => b.id === id);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require('../../assets/dreamBackground.png')}
        style={styles.background}
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>← Geri</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.cardContainer}>
            <DreamDetailBox style={styles.purple} cardTitle={item.pageTitle} />

            <View style={styles.sectionDivider} />

            <DreamDetailBox
              cardTitle="Genel Bakış"
              paragraph={item.pageTitleDesc}
            />
            <DreamDetailBox
              cardTitle={item.generalMeanTitle}
              paragraph={item.generalMeanDesc}
            />
            <DreamDetailBox
              cardTitle={item.genderMeanTitle}
              paragraph={item.genderMeanDesc}
            />
            <DreamDetailBox
              cardTitle={item.ageStatusTitle}
              paragraph={item.ageStatusDesc}
            />
            <DreamDetailBox
              cardTitle={item.psycStatusTitle}
              paragraph={item.psycStatusDesc}
            />
            <DreamDetailBox
              cardTitle={item.typeTitle}
              paragraph={item.typeDesc}
            />
          <View>
            <Text style={styles.footer}>Oluşturan: Beyza Yalçınkaya</Text>
          </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Blog;
