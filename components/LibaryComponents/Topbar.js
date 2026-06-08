import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TopBar() {
    return (
        <View className="block">
        <View className="flex-row justify-between items-center px-4 mt-10 py-3">
            
            <View className="flex-row items-center space-x-3 gap-3">
                
                <TouchableOpacity className="bg-blue-500 w-11 h-11 rounded-full items-center justify-center">
                    <Text className="text-black font-extrabold text-[16px]">
                        S
                    </Text>
                </TouchableOpacity>

                <Text className="text-white text-[25px] font-bold">
                    Your Library
                </Text>
            </View>

            <View className="flex-row items-center space-x-4 gap-3">

                <TouchableOpacity>
                    <Ionicons name="search" size={24} color="white" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Ionicons name="add" size={28} color="white" />
                </TouchableOpacity>
            </View>

        </View>

        <View className="flex-row justify-start items-center px-4 gap-3 mt-2 pb-2 border-b-2">
            <TouchableOpacity className="px-4 py-2 bg-[#2a2a2a] rounded-full">
                <Text className="text-white font-medium">Playlists</Text>
            </TouchableOpacity>

            <TouchableOpacity className="px-4 py-2 bg-[#2a2a2a] rounded-full">
                <Text className="text-white font-medium">Downloaded</Text>
            </TouchableOpacity>
        </View>

        </View>
    );
}