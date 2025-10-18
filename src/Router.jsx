import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
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
      background: '#42214a', //#391d54
    },
  };
  return (
    <NavigationContainer theme={navTheme}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 10,
            backgroundColor: '#42214a',
            borderRadius: 20,
            borderTopWidth: 1,
            borderColor: 'rgba(167, 139, 250, 0.35)',
          },
          tabBarActiveTintColor: '#7e07f5',
          tabBarInactiveTintColor: 'rgba(245,243,255,0.6)',
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
  );
};

export default Router;
