import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Feather';
 
import List from './pages/List';
import Form from './pages/Form';
 
const {Navigator, Screen} = createBottomTabNavigator();
 
function Tab(){
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Feed') {
                iconName = 'rss';
                } 
                else if (route.name === 'List') {
                iconName ='list'; 
                }
                else if (route.name === 'Form') {
                iconName = focused ?  'user' : 'alert-circle';
                color = 'red'
                }
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            })}
        tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'gray',               
        }}>
            <Screen name="List" component={List}  />
            <Screen name="Form" component={Form}  />
        </Navigator>
        </NavigationContainer>
    );
}
 
export default Tab;