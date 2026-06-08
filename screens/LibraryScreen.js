import {View, Text} from "react-native";
import {PRIMARY_COLOR} from "../theme/theme";
import { StatusBar } from "react-native";
import BottomBar from "../components/BottomBar";
import TopBar from "../components/LibaryComponents/Topbar";
import Playlists from "../components/LibaryComponents/Playlists";

export default function LibraryScreen(){
    return(
        <>
        <View style={{flex:1, backgroundColor: PRIMARY_COLOR}}>
            <TopBar />

            <View className="flex-1">
                <Playlists />
            </View>

            <StatusBar style="light"/>

            <BottomBar />
        </View>
        </>
    )
}