import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Home from './pages/Home/Home';
import History from './pages/History/History';
import Profile from './pages/Profile/Profile';
import Settings from './pages/Settings/Settings';

const Tab = createBottomTabNavigator();

const Router = () => {
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };
  return (
    <ImageBackground
      source={require('./assets/dreamBackground.png')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <NavigationContainer theme={navTheme}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              position: 'absolute',
              bottom: 10,
              backgroundColor: 'rgba(0,0,0,0.28)',
              borderRadius: 20,
              borderTopWidth: 1,
              borderColor: 'rgba(120, 70, 255, 0.6)',
            },
            tabBarActiveTintColor: 'rgba(120, 70, 255, 0.6)',
            tabBarInactiveTintColor: 'rgba(255,255,255,0.75)',
            tabBarLabelStyle: { fontWeight: '700' },
            tabBarItemStyle: { paddingVertical: 6 },
            tabBarHideOnKeyboard: true,
          }}
          sceneContainerStyle={{ backgroundColor: 'transparent' }}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="History" component={History} />
          <Tab.Screen name="Profile" component={Profile} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </ImageBackground>
  );
};

export default Router;
