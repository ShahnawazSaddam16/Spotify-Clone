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
        className="mb-5 p-[30px]"
        style={{ borderRadius: RADIUS_FULL }}
      >
        <FontAwesome5 name="spotify" size={80} color={LOGO_COLOR} />
      </View>

      <Text
        className="text-[36px] font-bold"
        style={{ color: TEXT_PRIMARY }}
      >
        Millions of Songs.
      </Text>

      <Text
        className="text-[36px] font-bold"
        style={{ color: TEXT_PRIMARY }}
      >
        Free on Spotify.
      </Text>

      <View className="w-4/5 pt-24 mt-8">
        <TouchableOpacity
          className="items-center mb-[10px]"
          style={{
            backgroundColor: BTN_PRIMARY_BG,
            paddingVertical: 14,
            paddingHorizontal: 20,
            borderRadius: RADIUS_FULL,
          }}
          onPress={() => {
            navigation.navigate("SignInScreen");
          }}
        >
          <Text
            className="text-[16px] font-bold"
            style={{ color: BTN_PRIMARY_TEXT }}
          >
            Sign up for Free
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="items-center mb-[10px]"
          style={{
            paddingVertical: 14,
            paddingHorizontal: 20,
            borderRadius: RADIUS_FULL,
            borderColor: BORDER_COLOR,
            borderWidth: 1,
          }}
          onPress={() => {
            navigation.navigate("LoginScreen");
          }}
        >
          <Text
            className="text-[16px] font-bold"
            style={{ color: TEXT_SECONDARY }}
          >
            Log in
          </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="light" />
    </View>
  );
}