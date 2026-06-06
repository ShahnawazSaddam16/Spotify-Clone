import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  BORDER_COLOR,
  PRIMARY_COLOR,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
} from "../theme/theme";

export default function BottomBar() {
  const navigation = useNavigation();
  const route = useRoute();
  const insets = useSafeAreaInsets();

  const tabs = [
    { name: "HomeScreen", label: "Home", icon: "home", type: "ion" },
    { name: "SearchScreen", label: "Search", icon: "search", type: "ion" },
    {
      name: "LibraryScreen",
      label: "Your Library",
      icon: "library-music",
      type: "material",
    },
    { name: "Create", label: "Create", icon: "plus", type: "feather" },
  ];

  const handlePress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View
      style={{
        backgroundColor: PRIMARY_COLOR,
        borderTopColor: BORDER_COLOR,
      }}
    >
      <View
        className="mx-3 mb-2 rounded-xl px-3 py-2 flex-row items-center justify-between"
        style={{
          backgroundColor: "rgba(29, 185, 84, 0.85)",
        }}
      >
        <View className="flex-row items-center flex-1">
          <Image
            source={require("../assets/albums/image14.jpg")}
            className="w-12 h-12 rounded-md"
          />

          <View className="ml-3 flex-1">
            <Text
              className="text-white text-base font-bold"
              numberOfLines={1}
            >
              Nasha
            </Text>
            <Text
              className="text-white opacity-80 text-sm"
              numberOfLines={1}
            >
              Talwiinder
            </Text>
          </View>
        </View>

        <View className="flex-row items-center">
          <TouchableOpacity className="mx-2">
            <Ionicons name="phone-portrait-outline" size={22} color="white" />
          </TouchableOpacity>

          <TouchableOpacity className="mx-2">
            <Ionicons name="checkmark-circle" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity className="mx-2">
            <Ionicons name="play" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View
        className="flex-row items-center justify-around h-[95px] border-t pb-3 pt-2"
        style={{
          backgroundColor: PRIMARY_COLOR,
          borderTopColor: BORDER_COLOR,
          paddingBottom: insets.bottom,
        }}
      >
        {tabs.map((tab) => {
          const active = route.name === tab.name;

          return (
            <TouchableOpacity
              key={tab.name}
              className="items-center justify-center"
              onPress={() => handlePress(tab.name)}
            >
              {tab.type === "ion" ? (
                <Ionicons
                  name={tab.icon}
                  size={24}
                  color={active ? TEXT_PRIMARY : TEXT_SECONDARY}
                />
              ) : tab.type === "material" ? (
                <MaterialIcons
                  name={tab.icon}
                  size={24}
                  color={active ? TEXT_PRIMARY : TEXT_SECONDARY}
                />
              ) : (
                <Feather
                  name={tab.icon}
                  size={24}
                  color={active ? TEXT_PRIMARY : TEXT_SECONDARY}
                />
              )}

              <Text
                className="text-[11px] mt-1"
                style={{
                  color: active ? TEXT_PRIMARY : TEXT_SECONDARY,
                }}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}