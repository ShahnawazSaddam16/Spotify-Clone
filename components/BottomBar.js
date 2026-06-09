import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Modal } from "react-native";
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
  const [playerVisible, setPlayerVisible] = useState(false);
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

  return (
    <>
      <Modal
        visible={playerVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setPlayerVisible(false)}
      >
        <View style={{ flex: 1, backgroundColor: "#4b0d0d" }}>
          <View style={{ flex: 1, paddingTop: insets.top, paddingHorizontal: 20 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
              <TouchableOpacity onPress={() => setPlayerVisible(false)}>
                <Ionicons name="chevron-down" size={30} color="white" />
              </TouchableOpacity>

              <Text style={{ color: "white", fontWeight: "600", fontSize: 16 }}>PLAYING FROM PLAYLIST</Text>

              <TouchableOpacity>
                <Ionicons name="ellipsis-vertical" size={24} color="white" />
              </TouchableOpacity>
            </View>

            <Text style={{ color: "white", textAlign: "center", marginTop: 5, fontSize: 18, fontWeight: "bold" }}>Butt Networks</Text>

            <Image
              source={require("../assets/albums/image14.jpg")}
              style={{ width: "100%", height: 360, borderRadius: 20, marginTop: 30 }}
              resizeMode="cover"
            />

            <View style={{ marginTop: 30 }}>
              <Text style={{ color: "white", fontSize: 28, fontWeight: "bold" }}>Nasha</Text>
              <Text style={{ color: "#cfcfcf", marginTop: 5, fontSize: 16 }}>Talwiinder</Text>
            </View>

            <View style={{ marginTop: 25 }}>
              <View style={{ height: 4, backgroundColor: "rgba(255,255,255,0.3)", borderRadius: 10 }}>
                <View style={{ width: "60%", height: 4, backgroundColor: "white", borderRadius: 10 }} />
              </View>

              <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 6 }}>
                <Text style={{ color: "white" }}>2:31</Text>
                <Text style={{ color: "white" }}>4:15</Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 35 }}>
              <Ionicons name="shuffle" size={26} color="white" />
              <Ionicons name="play-skip-back" size={38} color="white" />

              <TouchableOpacity style={{ width: 80, height: 80, borderRadius: 40, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
                <Ionicons name="pause" size={40} color="black" />
              </TouchableOpacity>

              <Ionicons name="play-skip-forward" size={38} color="white" />
              <Ionicons name="repeat" size={26} color="white" />
            </View>
          </View>
        </View>
      </Modal>

      <View style={{ backgroundColor: PRIMARY_COLOR, borderTopColor: BORDER_COLOR }}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => setPlayerVisible(true)}
          className="mx-3 mb-2 rounded-xl px-3 py-2 flex-row items-center justify-between"
          style={{ backgroundColor: "#5d1c18" }}
        >
          <View className="flex-row items-center flex-1">
            <Image source={require("../assets/albums/image14.jpg")} className="w-12 h-12 rounded-md" />

            <View className="ml-3 flex-1">
              <Text className="text-white text-base font-bold" numberOfLines={1}>Nasha</Text>
              <Text className="text-white opacity-80 text-sm" numberOfLines={1}>Talwiinder</Text>
            </View>
          </View>

          <View className="flex-row items-center">
            <TouchableOpacity className="mx-2">
              <Ionicons name="phone-portrait-outline" size={22} color="white" />
            </TouchableOpacity>

            <TouchableOpacity className="mx-2">
              <Ionicons name="checkmark-circle" size={24} color="#1DB954" />
            </TouchableOpacity>

            <TouchableOpacity className="mx-2">
              <Ionicons name="pause" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <View className="flex-row items-center justify-around h-[95px] border-t pb-3 pt-2" style={{ backgroundColor: PRIMARY_COLOR, borderTopColor: BORDER_COLOR, paddingBottom: insets.bottom }}>
          {tabs.map((tab) => {
            const active = route.name === tab.name;
            return (
              <TouchableOpacity key={tab.name} className="items-center justify-center" onPress={() => navigation.navigate(tab.name)}>
                {tab.type === "ion" ? (
                  <Ionicons name={tab.icon} size={24} color={active ? TEXT_PRIMARY : TEXT_SECONDARY} />
                ) : tab.type === "material" ? (
                  <MaterialIcons name={tab.icon} size={24} color={active ? TEXT_PRIMARY : TEXT_SECONDARY} />
                ) : (
                  <Feather name={tab.icon} size={24} color={active ? TEXT_PRIMARY : TEXT_SECONDARY} />
                )}

                <Text className="text-[11px] mt-1" style={{ color: active ? TEXT_PRIMARY : TEXT_SECONDARY }}>{tab.label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </>
  );
}