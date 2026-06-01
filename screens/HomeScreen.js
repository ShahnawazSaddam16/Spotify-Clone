import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { PRIMARY_COLOR } from "../theme/theme";

export default function HomeScreen() {
  return (
    <>
      <View
        className="flex-1 justify-center items-center"
        style={{ backgroundColor: PRIMARY_COLOR }}
      >
        <Text className="text-[#FFFFFF]">HomeScreen</Text>
        <StatusBar style="light" />
      </View>
    </>
  );
}
