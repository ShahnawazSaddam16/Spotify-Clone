import React from "react";
import { View, Text, StatusBar,  ScrollView } from "react-native";
import { PRIMARY_COLOR } from "../theme/theme";
import BottomBar from "../components/BottomBar";
import TopBar from "../components/SearchComponents/TopBar";
import DiscoverNew from "../components/SearchComponents/DiscoverNew";
import BrowseAll from "../components/SearchComponents/BrowseAll";

export default function SearchScreen() {
  return (
    <View
      className="flex-1"
      style={{ backgroundColor: PRIMARY_COLOR }}
    >
        <TopBar/>
      <StatusBar barStyle="light-content" />

         <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
      <View className="flex-1">
        <DiscoverNew />
        <BrowseAll />
      </View>
      </ScrollView>

      <BottomBar />
    </View>
  );
}