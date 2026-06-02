import { View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { PRIMARY_COLOR } from "../theme/theme";
import BottomBar from "../components/BottomBar";
import TopBar from "../components/HomeComponents/TopBar";
import Playlists from "../components/HomeComponents/Playlists";
import Albums from "../components/HomeComponents/Albums";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: PRIMARY_COLOR }}>
      <TopBar />

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <Playlists />
        <Albums />
      </ScrollView>

      <BottomBar />

      <StatusBar style="light" />
    </View>
  );
}