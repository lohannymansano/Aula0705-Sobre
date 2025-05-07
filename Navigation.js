import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./Screens/HomeScreen";
import SettingsScreen from "./Screens/SettingsScreen";
import LoginScreen from "./Screens/LoginScreen";
import AboutScreen from "./Screens/AboutScreen";

const Drawer = createDrawerNavigator();

function Navigation(){
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Sair">
                <Drawer.Screen name="Home" component={HomeScreen}/>
                <Drawer.Screen name="Settings" component={SettingsScreen}/>
                <Drawer.Screen name="Sair" component={LoginScreen}/>
                <Drawer.Screen name="Atualizacao" component={AboutScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;