import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TopBar() {
  return (
    <>
      <View className="flex justify-center items-start mt-10 mx-5">
        <View className="flex-row items-center justify-between w-full">
          <View className="flex-row items-center gap-6">
            <TouchableOpacity
              className="bg-blue-500 items-center justify-center w-10 h-10 rounded-full"
            >
              <Text className="text-black text-[18px] font-extrabold">S</Text>
            </TouchableOpacity>

            <Text className="text-[#FFFFFF] text-[24px] font-bold">
              Search
            </Text>
          </View>

          <TouchableOpacity className="items-center justify-center">
            <Ionicons name="camera-outline" size={28} color="#FFFFFF" />
          </TouchableOpacity>

        </View>
        <TextInput 
        className="border-2 border-gray-400 justify-center items-center"
        />
      </View>
    </>
  );
}