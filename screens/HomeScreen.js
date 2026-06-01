import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { PRIMARY_COLOR } from "../theme/theme";
import BottomBar from "../components/BottomBar";

export default function HomeScreen() {
  return (
    <View
      className="flex-1"
      style={{ backgroundColor: PRIMARY_COLOR }}
    >
      <View className="flex-1 justify-center items-center">
        <Text className="text-white">HomeScreen</Text>
      </View>

      <BottomBar />

      <StatusBar style="light" />
    </View>
  );
}