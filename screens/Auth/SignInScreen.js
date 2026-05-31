import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { PRIMARY_COLOR } from "../../theme/theme";

export default function SignInScreen(){
    return(
        <>
        <View style={styles.container}>
            <StatusBar style="light"/>
        </View>
        </>
    )
}

const styles = new StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: PRIMARY_COLOR,
        justifyContent: "center",
        alignItems: "center"
    }
})