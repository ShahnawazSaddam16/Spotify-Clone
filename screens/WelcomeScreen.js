import { View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import {
  BORDER_COLOR,
  BTN_PRIMARY_BG,
  BTN_PRIMARY_TEXT,
  LOGO_COLOR,
  PRIMARY_COLOR,
  RADIUS_FULL,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
} from "../theme/theme";
import { FontAwesome5 } from "@expo/vector-icons";

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <View
      className="flex-1 items-center justify-center"
      style={{ backgroundColor: PRIMARY_COLOR }}
    >
      <View
        className="mb-5"
        style={{
          padding: 30,
          borderRadius: RADIUS_FULL,
        }}
      >
        <FontAwesome5 name="spotify" size={80} color={LOGO_COLOR} />
      </View>

      <Text
        style={{
          color: TEXT_PRIMARY,
          fontSize: 36,
          fontWeight: "bold",
        }}
      >
        Millions of Songs.
      </Text>

      <Text
        style={{
          color: TEXT_PRIMARY,
          fontSize: 36,
          fontWeight: "bold",
        }}
      >
        Free on Spotify.
      </Text>

      <View className="w-4/5 pt-24 mt-8">
        <TouchableOpacity
          style={{
            backgroundColor: BTN_PRIMARY_BG,
            paddingVertical: 14,
            paddingHorizontal: 20,
            borderRadius: RADIUS_FULL,
            marginBottom: 10,
            alignItems: "center",
          }}
          onPress={() => {
            navigation.navigate("SignInScreen");
          }}
        >
          <Text
            style={{
              color: BTN_PRIMARY_TEXT,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Sign up for Free
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            paddingVertical: 14,
            paddingHorizontal: 20,
            borderRadius: RADIUS_FULL,
            borderColor: BORDER_COLOR,
            borderWidth: 1,
            marginBottom: 10,
            alignItems: "center",
          }}
          onPress={() => {
            navigation.navigate("LoginScreen");
          }}
        >
          <Text
            style={{
              color: TEXT_SECONDARY,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Log in
          </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="light" />
    </View>
  );
}