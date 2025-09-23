import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImageBackground, Image } from 'react-native';
import Home from './pages/Home/Home';
import Generate from './pages/Generate';
import History from './pages/History/History';
import Settings from './pages/Settings/Settings';
import Blog from './pages/Blog/Blog';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}
    >
      <Stack.Screen name="HomeMain" component={Home} />
      <Stack.Screen name="Blog" component={Blog} />
    </Stack.Navigator>
  );
}

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
              backgroundColor: 'rgba(0,0,0,1)',
              borderRadius: 20,
              borderTopWidth: 1,
              borderColor: 'rgba(120, 70, 255, 0.6)',
            },
            tabBarActiveTintColor: 'rgba(120, 70, 255, 0.6)',
            tabBarInactiveTintColor: 'rgba(255,255,255,5)',
            tabBarLabelStyle: { fontWeight: '700' },
            tabBarItemStyle: { paddingVertical: 10 },
            tabBarHideOnKeyboard: true,
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeStackNavigator}
            options={{
              tabBarLabel: '', // tab nav daki yazıyı kaldırmak için
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={require('./assets/homeIconDream.png')}
                  style={{ width: size, height: size, tintColor: color }}
                />
              ),
            }}
          />

          <Tab.Screen
            name="Generate"
            component={Generate}
            options={{
              tabBarLabel: '',
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={require('./assets/generate.png')}
                  style={{ width: size, height: size, tintColor: color }}
                />
              ),
            }}
          />

          <Tab.Screen
            name="History"
            component={History}
            options={{
              tabBarLabel: '',
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={require('./assets/history.png')}
                  style={{ width: size, height: size, tintColor: color }}
                />
              ),
            }}
          />

          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarLabel: '',
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={require('./assets/settings.png')}
                  style={{ width: size, height: size, tintColor: color }}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ImageBackground>
  );
};

export default Router;
