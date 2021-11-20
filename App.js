import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

// importing screens
import SplashScreen from './src/screens/Splash.js';
import AddMemberScreen from './src/screens/AddMember.js';
import ExportScreen from './src/screens/Export.js';
import ListWiseMemberScreen from './src/screens/ListWiseMember.js';
import HomeScreen from './src/screens/Home.js';
import LoginScreen from './src/screens/Login.js';
import PaymentScreen from './src/screens/Payment.js';
import SignupScreen from './src/screens/Signup.js';
import ForgotPasswordScreen from './src/screens/ForgotPassword.js';
import EditMemberScreen from './src/screens/EditMember.js';
import FamilyMemberScreen from './src/screens/FamilyMember.js';
import MemberInfoScreen from './src/screens/MemberInfo.js';

// navigation files
import LeftNavigation from './src/screens/LeftNavigation.js';
import {DrawerContent} from './src/components/CustomDrawer.js';

// navigation imports
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomDrawer from './src/components/CustomDrawer';

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    activeOpacity={0.9}
    style={{
      top: 0,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onPress={onPress}>
    <View
      style={{
        zIndex: 100,
        width: 60,
        height: 60,
        borderRadius: 35,
        // backgroundColor: '#EE509B',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const Tab = createBottomTabNavigator();
// const BottomTab = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="home"
//       tabBarOptions={{
//         showLabel: false,
//         activeTintColor: '#EE509B',
//         keyboardHidesTabBar: true,
//       }}>
//       <Tab.Screen
//         name="ListWiseMember"
//         component={ListWiseMemberScreen}
//         options={{
//           tabBarIcon: ({color}) => {
//             return <FontAwesome5 name="th-large" size={22} color={color} />;
//           },
//         }}
//       />
//       <Tab.Screen
//         name="MainHome"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <MaterialCommunityIcons
//               name="home-outline"
//               size={25}
//               color={focused ? '#EE509B' : '#767676'}
//             />
//           ),
//           tabBarButton: props => <CustomTabBarButton {...props} />,
//         }}
//       />
//       <Tab.Screen
//         name="PaymentPage"
//         component={PaymentScreen}
//         options={{
//           tabBarIcon: ({color}) => {
//             return (
//               <FontAwesome5 name="money-bill-alt" size={22} color={color} />
//             );
//           },
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

const Drawer = createDrawerNavigator();
const DrawerTab = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen
        name="AboutUs"
        options={{title: 'About Us'}}
        component={HomeScreen}
      />
      <Drawer.Screen name="Help" component={HomeScreen} />
      <Drawer.Screen name="TellAFriend" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={HomeScreen} />
      <Drawer.Screen name="QuickSupport" component={HomeScreen} />
      <Drawer.Screen name="ChatWithUs" component={HomeScreen} />
      {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
    </Drawer.Navigator>
  );
};

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        {/* <Stack.Screen name="Drawer" component={DrawerTab} /> */}
        <Stack.Screen
          name="HomeScreen"
          component={DrawerTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="AddMember" component={AddMemberScreen} />
        <Stack.Screen name="EditMember" component={EditMemberScreen} />
        <Stack.Screen name="FamilyMember" component={FamilyMemberScreen} />
        <Stack.Screen name="MemberInfo" component={MemberInfoScreen} />
        <Stack.Screen name="Export" component={ExportScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
