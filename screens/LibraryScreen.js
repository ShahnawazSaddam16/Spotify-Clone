import {View, Text} from "react-native";
import {PRIMARY_COLOR} from "../theme/theme";
import { StatusBar } from "react-native";
import BottomBar from "../components/BottomBar";

export default function LibraryScreen(){
    return(
        <>
        <View style={{flex:1, backgroundColor: PRIMARY_COLOR}}>
            <View className="flex-1 justify-center items-center">
                <Text className="text-white">LibaryScreen</Text>
            </View>

            <StatusBar style="light"/>

            <BottomBar />
        </View>
        </>
    )
}