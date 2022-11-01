import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from './screens/Profile';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import DrawerItems from './constants/DrawerItems';
import Header from './components/Header';
import { View } from 'react-native';

const Drawer = createDrawerNavigator();

export default function App() {
 return (
  <View style={{backgroundColor: "#1E1E1E"}}>
    <Header/>
    <NavigationContainer>
      <Drawer.Navigator
            drawerType="front"
            initialRouteName="Profile"
            drawerContentOptions={{
              activeTintColor: '#e91e63',
              itemStyle: { marginVertical: 10 },
            }}
      >
        {
          DrawerItems.map(drawer => <Drawer.Screen
            key={drawer.name}
          />
          )
        }
      </Drawer.Navigator>
    </NavigationContainer>
  </View>
 );
}