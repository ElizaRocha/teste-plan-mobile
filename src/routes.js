import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import First from "./First";
import Second from "./Second";

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="First" component={First} options={{headerShown: false}}/>
        <AppStack.Screen name="Second" component={Second}  options={{headerShown: false}}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}