import {View, Text, TouchableOpacity} from "react-native";

export default function TopBar(){
    return(
        <>
        <View className="flex justify-start items-start mt-10 ml-10">
            {/* Avator */}
            <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-[100%]">
                <Text className="font-extrabold text-[16px]">S</Text>
            </TouchableOpacity>
        </View>
        </>
    )
 }