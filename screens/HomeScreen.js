import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { PRIMARY_COLOR } from "../theme/theme";
import BottomBar from "../components/BottomBar";
import TopBar from "../components/HomeComponents/TopBar";
import Playlists from "../components/HomeComponents/Playlists";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: PRIMARY_COLOR }}>
      
      <TopBar />

      {/* Content */}
      <View className="flex-1">
        <Playlists />
      </View>

      <BottomBar />

      <StatusBar style="light" />
    </View>
  );
}