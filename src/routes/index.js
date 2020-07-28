import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Main from '../pages/Main/';
import Contact from '../pages/Contact/';

const Routes = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Main}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Contato"
        component={Contact}
        options={{
          tabBarLabel: 'Contato',
          tabBarIcon: ({ color }) => (
            <Icon name="phone" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Routes;
