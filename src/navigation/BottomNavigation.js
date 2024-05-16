import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors, responsive } from '../utils/theme';

// Tab Screens
import GivenScreen from '../screens/BottomTab/GivenScreen';
import Home from '../screens/BottomTab/Home';
import LikedBooks from '../screens/BottomTab/LikedBooks';
import Users from '../screens/user/User';


const Tab = createBottomTabNavigator();

function AllBottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.primary,
          paddingBottom: responsive.rf(0.4),
          paddingTop: responsive.rf(0.5),
          height:responsive.rf(7)
        },
      }}>
      <Tab.Screen
        name="Given"
        component={GivenScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({focused }) => (
            <Text
              style={{
                fontSize:responsive.rf(1.3),
                fontFamily: !focused?"Roboto-Light":"Roboto-Medium",
                color: !focused ? Colors.light : Colors.light,
              }}>
              Given
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Icon
              name={!focused?"circle-o":"circle"}
              size={focused ? responsive.rf(3.5) : responsive.rf(3)}
              color={!focused ? Colors.light : Colors.light}
            />
          ),
        }}
      />
       <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: ({focused }) => (
            <Text
              style={{
                fontSize:responsive.rf(1.3),
                fontFamily: !focused?"Roboto-Light":"Roboto-Medium",
                color: !focused ? Colors.light : Colors.light,
              }}>
              Changed
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Icon
              name={!focused?"star-o":"star"}
              size={focused ? responsive.rf(4) : responsive.rf(3)}
              color={!focused ? Colors.light : Colors.light}
            />
          ),
        }}
      />
        <Tab.Screen
        name="Liked"
        component={LikedBooks}
        options={{
          headerShown: false,
          tabBarLabel: ({focused }) => (
            <Text
              style={{
                fontSize:responsive.rf(1.3),
                fontFamily: !focused?"Roboto-Light":"Roboto-Medium",
                color: !focused ? Colors.light : Colors.light,
              }}>
             Liked
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Icon
              name={!focused?"heart-o":"heart"}
              size={focused ? responsive.rf(3.5) : responsive.rf(3)}
              color={!focused ? Colors.light : Colors.light}
            />
          ),
        }}
      />

        <Tab.Screen
        name="Users"
        component={Users}
        options={{
          headerShown: false,
          tabBarLabel: ({focused }) => (
            <Text
              style={{
                fontSize:responsive.rf(1.3),
                fontFamily: !focused?"Roboto-Light":"Roboto-Medium",
                color: !focused ? Colors.light : Colors.light,
              }}>
              Me
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <IonIcons
              name={!focused?"person-circle-outline":"person-circle"}
              size={focused ? responsive.rf(4.4) : responsive.rf(3)}
              color={!focused ? Colors.light : Colors.light}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AllBottomTabs;