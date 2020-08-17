import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Main from '../pages/Main/';

import Search from '../pages/Search/';
import Stock from '../pages/Stock/';
import Sell from '../pages/Sell/';
import Contact from '../pages/Contact/';
import Details from '../pages/Details/';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import ColorsFlat from '../styles/Colors';

const Routes = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const actionStack = (props) => {
    //console.log(props);
    return (
      <Stack.Navigator headerMode="none" initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Detalhes" component={Details} />
      </Stack.Navigator>
    );
  };

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: ColorsFlat.border,
        inactiveBackgroundColor: ColorsFlat.border,
        activeTintColor: Colors.white,
      }}
    >
      <Tab.Screen
        name="Home"
        component={actionStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Pesquisar"
        component={Search}
        options={{
          tabBarLabel: 'Pesquisar',
          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Estoque"
        component={Stock}
        options={{
          tabBarLabel: 'Estoque',
          tabBarIcon: ({ color }) => (
            <Icon name="directions-car" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Vender"
        component={Sell}
        options={{
          tabBarLabel: 'Vender',
          tabBarIcon: ({ color }) => (
            <Icon name="attach-money" color={color} size={26} />
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
