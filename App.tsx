/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PaperProvider} from 'react-native-paper';
import WidgetScreen from './src/screens/WidgetScreen';
import HomeScreen from './src/screens/HomeScreen';
import FullScreenView from './src/screens/FullScreenView';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Welcome', headerShown: false}}
          />
          <Stack.Screen
            name="WidgetScreen"
            component={WidgetScreen}
            options={{title: 'Customer Status', headerShown: false}}
          />
          <Stack.Screen
            name="FullScreenView"
            component={FullScreenView}
            options={{title: 'FullScreenView', headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
