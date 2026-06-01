import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { PRIMARY_COLOR } from "../theme/theme";
import BottomBar from "../components/BottomBar";
import TopBar from "../components/HomeComponents/TopBar";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: PRIMARY_COLOR }}>
      
      <TopBar />

      <View className="flex-1 justify-center items-center">
        <Text className="text-white">HomeScreen</Text>
      </View>

      <BottomBar />

      <StatusBar style="light" />
    </View>
  );
}