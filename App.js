import { Text, View } from "react-native";
import Sample from "./screens/Sample";
import { StatusBar } from "expo-status-bar";
import SafeViewAndroid from "./utils/SafeViewAndroid";
import { SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View>
        <Text>Open up App.js to start working on your app!</Text>
        <Sample />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
