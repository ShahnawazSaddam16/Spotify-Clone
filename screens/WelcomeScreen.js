import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native"
import {
  BORDER_COLOR,
  BTN_PRIMARY_BG,
  BTN_PRIMARY_TEXT,
  LOGO_COLOR,
  PRIMARY_COLOR,
  RADIUS_FULL,
  SECONDARY_COLOR,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
} from "../theme/theme";
import { FontAwesome5 } from "@expo/vector-icons";

export default function WelcomeScreen() {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.iconBox}>
        <FontAwesome5 name="spotify" size={80} color={LOGO_COLOR} />
      </View>

      <Text style={styles.title}>Millions of Songs.</Text>
      <Text style={styles.title}>Free on Spotify.</Text>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.signupBtn} 
        onPress={()=>{navigation.navigate("SignInScreen")}}>
        <Text style={styles.signupText}>Sign up for Free</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}
        onPress={()=>{navigation.navigate("LoginScreen")}}>
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: PRIMARY_COLOR,
  },

  iconBox: {
    padding: 30,
    borderRadius: RADIUS_FULL,
    marginBottom: 20,
  },

  title: {
    color: TEXT_PRIMARY,
    fontSize: 36,
    fontWeight: "bold",
  },

  btnContainer: {
    paddingTop: 100,
    marginTop: 30,
    width: "80%",
  },

  signupBtn: {
    backgroundColor: BTN_PRIMARY_BG,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: RADIUS_FULL,
    width: "100%",
    marginBottom: 10,
    alignItems: "center",
  },

  signupText: {
    color: BTN_PRIMARY_TEXT,
    fontSize: 16,
    fontWeight: "bold",
  },

  loginBtn: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: RADIUS_FULL,
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    width: "100%",
    marginBottom: 10,
    alignItems: "center",
  },

  loginText: {
    color: TEXT_SECONDARY,
    fontSize: 16,
    fontWeight: "bold",
  },
});
