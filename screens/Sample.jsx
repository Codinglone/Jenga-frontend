import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Sample = ({ navigation }) => {
  return (
    <View className="bg-blue-700 text-red-600">
      <SafeAreaView style={{flex: 1}}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Rating')}
      />
      </SafeAreaView>
    </View>
  );
};

export default Sample;
