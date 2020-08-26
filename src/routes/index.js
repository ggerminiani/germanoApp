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
  const Tab = createBottomTabNavigator();

  const HomeStack = createStackNavigator();
  function HomeStackScreen() {
    return (
      <HomeStack.Navigator headerMode="none">
        <HomeStack.Screen name="Home" component={Main} />
        <HomeStack.Screen name="Detalhes" component={Details} />
      </HomeStack.Navigator>
    );
  }

  const SearchStack = createStackNavigator();
  function SearchStackScreen() {
    return (
      <SearchStack.Navigator>
        <SearchStack.Screen name="Pesquisar" component={Search} />
      </SearchStack.Navigator>
    );
  }

  const StockStack = createStackNavigator();
  function StockStackScreen() {
    return (
      <StockStack.Navigator>
        <StockStack.Screen name="Estoque" component={Stock} />
      </StockStack.Navigator>
    );
  }

  const SellStack = createStackNavigator();
  function SellStackScreen() {
    return (
      <SellStack.Navigator>
        <SellStack.Screen name="Vender" component={Sell} />
      </SellStack.Navigator>
    );
  }

  const ContactStack = createStackNavigator();
  function ContactStackScreen() {
    return (
      <ContactStack.Navigator>
        <ContactStack.Screen name="Contato" component={Contact} />
      </ContactStack.Navigator>
    );
  }

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
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Pesquisar"
        component={SearchStackScreen}
        options={{
          tabBarLabel: 'Pesquisar',
          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Estoque"
        component={StockStackScreen}
        options={{
          tabBarLabel: 'Estoque',
          tabBarIcon: ({ color }) => (
            <Icon name="directions-car" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Vender"
        component={SellStackScreen}
        options={{
          tabBarLabel: 'Vender',
          tabBarIcon: ({ color }) => (
            <Icon name="attach-money" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Contato"
        component={ContactStackScreen}
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
