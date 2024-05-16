import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// all screens
import AllBottomTabs from './BottomNavigation';
import GivenScreen from '../screens/BottomTab/GivenScreen';
import Home from '../screens/BottomTab/Home';
import LikedBooks from '../screens/BottomTab/LikedBooks';
import Users from '../screens/user/User';
import ShowError from '../screens/others/ShowError';
import BookList from '../screens/BottomTab/BookList';
import SearchScreen from '../screens/others/SearchScreen';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        unmountOnBlur: false,
        // this solve the issue of while splash screen in dark mode
        cardStyleInterpolator: ({current, next, layouts}) => {
          return {
            cardStyle: {
              opacity: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            },
          };
        },
      }}>

      <Stack.Screen name="BottomTabPage" component={AllBottomTabs} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="BookList" component={BookList} />
      <Stack.Screen name="ShowError" component={ShowError} />
      <Stack.Screen name="Given" component={GivenScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="LikedBooks" component={LikedBooks} />
      <Stack.Screen name="User" component={Users} />

    </Stack.Navigator>
  );
};

export default MainNavigation;

