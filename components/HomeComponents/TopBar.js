import { View, Text, TouchableOpacity } from "react-native";
import { BTN_DISABLED_BG, SPOTIFY_GREEN, SPOTIFY_GREEN_DARK } from "../../theme/theme";
import { useState } from "react";

export default function TopBar() {
  const [active, setActive] = useState("All");

  return (
    <View className="flex justify-start items-start mt-10 ml-10">
      <View className="flex flex-row gap-5 items-center">
        <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-[100%]">
          <Text className="font-extrabold text-[16px]">S</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="px-6 py-2 rounded-[20px]"
          style={{
            backgroundColor:
              active === "All" ? SPOTIFY_GREEN : BTN_DISABLED_BG,
          }}
          onPress={() => setActive("All")}
        >
          <Text
            className="font-semibold text-[14px]"
            style={{
              color: active === "All" ? "#000000" : "#FFFFFF",
            }}
          >
            All
          </Text>
        </TouchableOpacity>

        <View className="flex-row items-center">
          <TouchableOpacity
            className="px-6 py-2 rounded-[20px]"
            style={{
              backgroundColor:
                active === "Music" ? SPOTIFY_GREEN : BTN_DISABLED_BG,
            }}
            onPress={() => setActive("Music")}
          >
            <Text
              className="font-semibold text-[14px]"
              style={{
                color: active === "Music" ? "#000000" : "#FFFFFF",
              }}
            >
              Music
            </Text>
          </TouchableOpacity>

          {active === "Music" && (
            <View
              className="ml-2 px-6 py-2 rounded-[20px]"
              style={{ backgroundColor: SPOTIFY_GREEN_DARK }}
            >
              <Text className="text-[#FFFFFF] text-[14px] font-semibold"
              style= {{color: active === "Music" ? "#000000" : "#FFFFFF",}}>
                Following
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}