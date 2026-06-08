import { Text, View, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Playlists() {
    return (
        <>
        <View className="mt-10 flex justify-between ml-3">
            
            <View className="flex-row items-center justify-between pr-4">
                
                <View className="flex-row items-center gap-2">
                    <TouchableOpacity>
                        <Ionicons name="arrow-up" size={16} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Ionicons name="arrow-down" size={16} color="white" />
                    </TouchableOpacity>

                    <Text className="text-[#FFFFFF] text-[19px] font-bold">
                        Recents
                    </Text>
                </View>

                <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center">
                    <Ionicons name="grid" size={18} color="white" />
                </TouchableOpacity>

            </View>

        </View>
        <View className="mt-4 px-4">

            <TouchableOpacity className="flex-row items-center py-3">
                <Image
                    source={require("../../assets/favicon.png")}
                    style={{ width: 64, height: 64, borderRadius: 8 }}
                />
                <View className="ml-4 flex-1">
                    <Text style={{ color: '#1DB954' }} className="text-[16px] font-semibold">Butt Networks</Text>
                    <Text className="text-[#9CA3AF]">Playlist • Shahnawaz saddam Butt</Text>
                </View>
                <Ionicons name="download" size={18} color="#1DB954" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center py-3">
                <View className="w-16 h-16 bg-[#a67bff] rounded-md items-center justify-center">
                    <Ionicons name="heart" size={26} color="white" />
                </View>
                <View className="ml-4 flex-1">
                    <Text className="text-[16px] font-semibold text-white">Liked Songs</Text>
                    <Text className="text-[#9CA3AF]">Playlist • Shahnawaz saddam Butt</Text>
                </View>
                <Ionicons name="download" size={18} color="#1DB954" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center py-3">
                <View className="w-16 h-16 bg-[#2f2f2f] rounded-md items-center justify-center">
                    <Ionicons name="person-add" size={22} color="white" />
                </View>
                <View className="ml-4 flex-1">
                    <Text className="text-[16px] font-semibold text-white">Add artists</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center py-3">
                <View className="w-16 h-16 bg-[#2f2f2f] rounded-md items-center justify-center">
                    <Ionicons name="location" size={22} color="white" />
                </View>
                <View className="ml-4 flex-1">
                    <Text className="text-[16px] font-semibold text-white">Add events and venues</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center py-3">
                <View className="w-16 h-16 bg-[#2f2f2f] rounded-md items-center justify-center">
                    <Ionicons name="musical-notes" size={22} color="white" />
                </View>
                <View className="ml-4 flex-1">
                    <Text className="text-[16px] font-semibold text-white">Import your music</Text>
                </View>
            </TouchableOpacity>

        </View>
        </>
    )
}