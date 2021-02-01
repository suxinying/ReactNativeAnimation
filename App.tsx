import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Routes} from "./src/Routes";
import Examples from "./src/Examples";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createStackNavigator<Routes>();
const AppNavigator = () => (
    <Stack.Navigator>
      <Stack.Screen
          name="Examples"
          component={Examples}
          options={{
            title: "Reanimated2 Examples"
          }}
      />
    </Stack.Navigator>
)
export default function App() {
  return (
      <NavigationContainer>
          <AppNavigator />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
