import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex bg-black items-center justify-center h-full">
      <Text className="text-red-600 text-lg">Super app do tcc 😎😋😊😙🙄😍</Text>
      <StatusBar style="light" translucent />
    </View>
  );
}
