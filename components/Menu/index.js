import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerActions, NavigationContainer } from "@react-navigation/native";


export default function Menu(){
    const Drawer = createDrawerNavigator();

    return(
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="App" 
                drawerStyle={{
                    backgroundColor: "#292929",
                    paddingVertical: 20
                }} 
                drawerContentOptions={{
                    activeBackgroundColor: "#fff",
                    inactiveTintColor: "#fff"
                }}>        
                
                <Drawer.Screen name="App"/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}