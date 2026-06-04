import React from "react";
import { View, Text, StatusBar } from "react-native";
import { PRIMARY_COLOR } from "../theme/theme";
import BottomBar from "../components/BottomBar";
import TopBar from "../components/SearchComponents/TopBar";

export default function SearchScreen() {
  return (
    <View
      className="flex-1"
      style={{ backgroundColor: PRIMARY_COLOR }}
    >
        <TopBar/>
      <StatusBar barStyle="light-content" />

      <View className="flex-1 items-center justify-center">
        <Text className="text-white text-xl">
          Search Screen
        </Text>
      </View>

      <BottomBar />
    </View>
  );
}