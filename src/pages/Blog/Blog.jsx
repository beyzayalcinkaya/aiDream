import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import styles from './Blog.style';

const Blog = () => {
  const route = useRoute();
  const { title, desc2 } = route.params;

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.container}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Blog;
