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

import Colors from '../styles/Colors';

const Routes = () => {
  const Stack = createStackNavigator();

  const BottomTab = createBottomTabNavigator();
  const Tab = () => {
    return (
      <BottomTab.Navigator
        tabBarOptions={{
          activeBackgroundColor: Colors.border,
          inactiveBackgroundColor: Colors.border,
          activeTintColor: Colors.white,
        }}
      >
        <BottomTab.Screen
          name="Main"
          component={Main}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Pesquisar"
          component={Search}
          options={{
            tabBarLabel: 'Pesquisar',
            //unmountOnBlur: true,
            tabBarIcon: ({ color }) => (
              <Icon name="search" color={color} size={26} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Veículos"
          component={Stock}
          initialParams={{ search: {} }}
          options={{
            tabBarLabel: 'Veículos',
            unmountOnBlur: true,
            tabBarIcon: ({ color }) => (
              <Icon name="directions-car" color={color} size={26} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Vender"
          component={Sell}
          options={{
            tabBarLabel: 'Vender',
            unmountOnBlur: true,
            tabBarIcon: ({ color }) => (
              <Icon name="attach-money" color={color} size={26} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Contato"
          component={Contact}
          options={{
            tabBarLabel: 'Contato',
            tabBarIcon: ({ color }) => (
              <Icon name="phone" color={color} size={26} />
            ),
          }}
        />
      </BottomTab.Navigator>
    );
  };

  const DetailsNavigator = createStackNavigator();
  const DetailsScreen = () => {
    return (
      <DetailsNavigator.Navigator>
        <DetailsNavigator.Screen
          name="Detalhes"
          component={Details}
          options={{
            title: 'Detalhes',
            headerBackTitle: 'Voltar',
            headerStyle: {
              backgroundColor: Colors.contrast,
            },
            headerTintColor: Colors.white,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </DetailsNavigator.Navigator>
    );
  };

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Tab} />
      <Stack.Screen name="Detalhes" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default Routes;

/*import React from 'react';
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
      <SearchStack.Navigator headerMode="none">
        <SearchStack.Screen name="Pesquisar" component={Search} />
      </SearchStack.Navigator>
    );
  }

  const StockStack = createStackNavigator();
  function StockStackScreen() {
    return (
      <StockStack.Navigator headerMode="none">
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
        name="Main"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          //unmountOnBlur: true,
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
        name="Veículos"
        component={StockStackScreen}
        options={{
          tabBarLabel: 'Veículos',
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
*/
