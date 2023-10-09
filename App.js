import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';
import Menu from './components/Menu';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import PermitPage from './components/PermitPage';
import BookingPage from './components/BookingPage';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Home" 
        drawerContent={props => <Menu {...props} />}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1C1B1F',
            height: 130
          },
          headerTitle: "L o c u s",
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 34,
          },
        }}
      >
        <Drawer.Screen name="HomePage" component={HomePage} />
        <Drawer.Screen name="ProfilePage" component={ProfilePage} />
        <Drawer.Screen name="PermitPage" component={PermitPage} />
        <Drawer.Screen name="BookingPage" component={BookingPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
