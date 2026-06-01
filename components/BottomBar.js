import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
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
    { name: "LibraryScreen", label: "Your Library", icon: "library-music", type: "material" },
    { name: "Create", label: "Create", icon: "plus", type: "feather" },
  ];

  return (
    <View
      className="flex-row items-center justify-around h-[110px] border-t pb-3 pt-2"
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
            onPress={() => navigation.navigate(tab.name)}
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
  );
}