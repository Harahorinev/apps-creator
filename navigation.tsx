import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from "./components/ProfileScreen";
import SecondScreen from "./components/SecondScreen";


const Drawer = createDrawerNavigator();

function RootNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator useLegacyImplementation={true} initialRouteName="Profile">
                <Drawer.Screen name="Profile" component={ProfileScreen} options={{headerShown: true}}/>
                <Drawer.Screen name="Second" component={SecondScreen} options={{headerShown: true}}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator
// export default RootNavigator