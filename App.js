import { Text, View } from "react-native";
import Sample from "./screens/Sample";

import { StatusBar } from "expo-status-bar";
import SafeViewAndroid from "./utils/SafeViewAndroid";
import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Ratings from "./screens/Ratings";
import Animations from "./screens/Animations";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <Stack.Navigator>
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        {/* <View>
          <Text>Open up App.js to start working on your app!</Text>
          <Sample />
          <Ratings />
          <Animations />
          
        </View>*/}
        <Stack.Screen name="Home" component={Sample} />
      <Stack.Screen name="Rating" component={Ratings} />
      <Stack.Screen name="Animation" component={Animations} />
      <StatusBar style="auto" />
      </SafeAreaView> 
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}
