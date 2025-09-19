import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';

import DreamInput from '../../components/DreamInput/DreamInput';
import Button from '../../components/Button';
import DreamCard from '../../components/DreamsCard';

const Generate = () => {
  return (
    <SafeAreaView>
      <DreamInput />
      <Button />
    </SafeAreaView>
  );
};

export default Generate;
