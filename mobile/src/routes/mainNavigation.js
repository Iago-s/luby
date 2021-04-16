import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

import Profile from '../pages/Profile';
import Repos from '../pages/Repositorys';
import Followers from '../pages/Followers';
import Following from '../pages/Following';

import colors from '../styles/colors';

const icons = {
  Profile: {
    icon: <Icon name="home-outline" solid color={colors.grayLight} size={30} />,
  },
  Repos: {
    icon: <Icon name="github" solid color={colors.grayLight} size={30} />,
  },
  Followers: {
    icon: <Icon name="account-multiple-outline" solid color={colors.grayLight} size={30} />,
  },
  Following: {
    icon: <Icon name="account-multiple-outline" solid color={colors.grayLight} size={30} />,
  },
};

const MainNavigation = () => (
  <>
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={({route, navigation}) => ({
        unmountOnBlur: true,
        tabBarIcon: ({color, size, focused}) => {
          const {icon} = icons[route.name];
          return icon;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: colors.white,
        },
        labelStyle: {
          fontSize: 11,
          fontWeight: 'bold',
          color: colors.grayLight,
        },
      }}
    >
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{title: 'Perfil'}}
      />
      <Tab.Screen
        name="Repos"
        component={Repos}
        options={{title: 'Repos'}}
      />
      <Tab.Screen
        name="Followers"
        component={Followers}
        options={{title: 'Seguidores'}}
      />
      <Tab.Screen
        name="Following"
        component={Following}
        options={{title: 'Seguindo'}}
      />
    </Tab.Navigator>
  </>
);

export default MainNavigation;
