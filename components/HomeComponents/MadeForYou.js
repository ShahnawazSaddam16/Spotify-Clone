import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";

export default function MadeForYou() {
  return (
    <View className="px-5 mt-20">
      <Text className="text-white text-[22px] font-bold mb-4">
        For fans of Hasan Raheem
      </Text>

      <View
        className="rounded-3xl p-4"
        style={{ backgroundColor: "#6B5378" }}
      >
        <View className="flex-row">
          <Image source={require("../../assets/albums/image7.jpg")}
            className="w-24 h-24 rounded-xl"
          />

          <View className="flex-1 ml-4 justify-center">
            <Text className="text-white text-2xl font-bold">
              Hasan Raheem Radio
            </Text>

            <Text className="text-white/80 text-lg mt-1">
              Spotify
            </Text>
          </View>

          <TouchableOpacity>
            <MaterialIcons
              name="more-vert"
              size={24}
              color="#FFFFFF"
            />
          </TouchableOpacity>
        </View>

        <Text className="text-white/80 text-base mt-4 leading-6">
          50 songs • Umair, Maanu, Hasan Raheem, Abdul Hannan, NAYEL
        </Text>

        <View className="flex-row items-center justify-between mt-5">
          <TouchableOpacity
            className="flex-row items-center px-4 py-3 rounded-full"
            style={{ backgroundColor: "rgba(0,0,0,0.25)" }}
          >
            <Feather
              name="volume-x"
              size={18}
              color="#FFFFFF"
            />
            <Text className="text-white ml-2 font-medium">
              Preview playlist
            </Text>
          </TouchableOpacity>

          <View className="flex-row items-center">
            <TouchableOpacity className="mr-5">
              <Ionicons
                name="add-circle-outline"
                size={38}
                color="#FFFFFF"
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Ionicons
                name="play-circle"
                size={58}
                color="#FFFFFF"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}