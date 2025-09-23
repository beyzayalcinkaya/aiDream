import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import DreamCard from '../../components/DreamsCard';
import styles from './History.style';
import { ScrollView } from 'react-native';

const History = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <DreamCard
          title="Rüyanın anlamı"
          dream="rüyamda erkek arkadaşımı gördüm beni aldatıyordu. yorumlar mısın bu rüyayı lütfen"
          answer="Rüyanda erkek arkadaşını seni aldatırken görmen, aslında çoğu zaman ilişkinizdeki güven, kaygı ve bilinçaltındaki korkuların sembolik bir dışavurumudur. Bu rüya, gerçek hayatta partnerinin seni aldattığını göstermez; daha çok senin içsel dünyanda var olan kuşku, değer görme isteği veya terk edilme kaygısına işaret eder. Aldatılma rüyaları bazen kişinin özgüvenini sorgulaması ya da “yeterli miyim?” düşüncesiyle bağlantılı olabilir. Ayrıca, ilişkinde gözlemlediğin küçük güvensizlik işaretleri ya da iletişim eksiklikleri bilinçaltında büyüyüp bu şekilde yansımış olabilir.

Eğer rüyanda çok fazla üzüntü hissettiysen bu, partnerinle olan bağında daha fazla güvenceye ihtiyaç duyduğunu gösterebilir. Ama eğer öfke ya da kızgınlık ön plandaysa, bu da aslında içten içe kendi sınırlarını korumak ve “benim değerim var” mesajını hatırlatmak anlamına gelir. Genel olarak bu tür rüyalar, ilişkinde ya da kendi içinde şeffaf iletişim, güven duygusu ve özsaygı ihtiyacını öne çıkarır."
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default History;
