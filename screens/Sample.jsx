import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Sample = () => {
  return (
    <View className="bg-blue-700 text-red-600">
      <SafeAreaView style={{flex: 1}}>
        <Text>Sample</Text>
      </SafeAreaView>
    </View>
  );
};

export default Sample;
