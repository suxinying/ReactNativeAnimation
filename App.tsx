import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Routes} from "./src/Routes";
import Examples from "./src/Examples";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import Worklets from "./src/Worklets";
import PanGesture from "./src/PanGesture";
import Transitions from "./src/Transitions";

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
        <Stack.Screen
            name="Worklets"
            component={Worklets}
            options={{
                title: "Worklets"
            }}
        />
        <Stack.Screen
            name="PanGesture"
            component={PanGesture}
            options={{
                title: "PanGesture"
            }}
        />
        <Stack.Screen
            name="Transitions"
            component={Transitions}
            options={{
                title: "Transitions"
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
