import { Text, View } from "react-native";
import Sample from "./screens/Sample";

import { StatusBar } from "expo-status-bar";
import SafeViewAndroid from "./utils/SafeViewAndroid";
import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Ratings from "./screens/Ratings";
import Animations from "./screens/Animations";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <View>
          <Text>Open up App.js to start working on your app!</Text>
          <Sample />
          <Ratings />
          <Animations />
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
