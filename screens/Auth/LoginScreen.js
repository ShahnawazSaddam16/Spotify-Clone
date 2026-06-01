import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  BORDER_COLOR,
  BTN_PRIMARY_BG,
  BTN_PRIMARY_TEXT,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
} from "../../theme/theme";
import LoadingDots from "../../theme/LoadingDots";

export default function LoginScreen() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [loadingType, setLoadingType] = useState("");

  const navigation = useNavigation();
  const EmailAlpahabets = ["@", ".", "com"];

  const startLoading = (type) => {
    setLoadingType(type);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setLoadingType("");
      navigation.navigate("HomeScreen");
    }, 4500);
  };

  const Login = () => {
    if (
      input.length === 0 ||
      !EmailAlpahabets.every((item) => input.includes(item))
    ) {
      setMessage("Please enter valid email");

      setTimeout(() => {
        setMessage("");
      }, 3000);
    } else {
      startLoading("email");
    }
  };

  return (
    <>
      <View
        className="flex-1"
        style={{ backgroundColor: PRIMARY_COLOR }}
      >
        <StatusBar style="light" />

        <View className="flex-row items-center justify-between pt-[60px] px-5">
          <TouchableOpacity
            className="w-10"
            onPress={() => navigation.navigate("WelcomeScreen")}
          >
            <Ionicons name="arrow-back" size={28} color="#fff" />
          </TouchableOpacity>

          <Text
            className="flex-1 text-center text-xl font-bold"
            style={{ color: TEXT_PRIMARY }}
          >
            Log in to Spotify
          </Text>

          <View className="w-10" />
        </View>

        <View className="flex-1 px-5 mt-[120px]">
          <Text
            className="text-[22px] font-bold mb-[10px]"
            style={{ color: TEXT_PRIMARY }}
          >
            Email
          </Text>

          <TextInput
            className="h-[55px] text-base px-[15px] rounded"
            style={{
              borderWidth: 1,
              borderColor: BORDER_COLOR,
              backgroundColor: SECONDARY_COLOR,
              color: TEXT_PRIMARY,
            }}
            value={input}
            onChangeText={(text) => setInput(text)}
            placeholderTextColor="#B3B3B3"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="email"
            textContentType="emailAddress"
            selectionColor="#1ED760"
          />

          <Text className="mt-[3px] text-red-500">
            {message}
          </Text>

          <TouchableOpacity
            className="mt-[18px] h-[55px] rounded-full justify-center items-center"
            style={{ backgroundColor: BTN_PRIMARY_BG }}
            onPress={Login}
          >
            <Text
              className="text-base font-bold"
              style={{ color: BTN_PRIMARY_TEXT }}
            >
              Continue
            </Text>
          </TouchableOpacity>

          <Text
            className="text-center mt-[25px] mb-5 text-[15px] font-semibold"
            style={{ color: TEXT_PRIMARY }}
          >
            Or log in with
          </Text>

          <TouchableOpacity
            className="h-[55px] rounded-full flex-row items-center mb-[15px] px-5"
            style={{
              borderWidth: 1,
              borderColor: BORDER_COLOR,
            }}
            onPress={() => startLoading("google")}
          >
            <View className="w-[30px]">
              <FontAwesome name="google" size={22} color="#EA4335" />
            </View>

            <Text
              className="flex-1 text-center text-base font-semibold mr-[30px]"
              style={{ color: TEXT_PRIMARY }}
            >
              Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="h-[55px] rounded-full flex-row items-center mb-[15px] px-5"
            style={{
              borderWidth: 1,
              borderColor: BORDER_COLOR,
            }}
            onPress={() => startLoading("facebook")}
          >
            <View className="w-[30px]">
              <FontAwesome
                name="facebook-official"
                size={22}
                color="#1877F2"
              />
            </View>

            <Text
              className="flex-1 text-center text-base font-semibold mr-[30px]"
              style={{ color: TEXT_PRIMARY }}
            >
              Facebook
            </Text>
          </TouchableOpacity>
        </View>

        <View className="items-center pb-20">
          <Text
            className="text-[15px]"
            style={{ color: TEXT_SECONDARY }}
          >
            Don't have an account?
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("SignInScreen")}
          >
            <Text
              className="text-base font-bold mt-2"
              style={{ color: TEXT_PRIMARY }}
            >
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {loading && (
        <View className="absolute inset-0">
          <LoadingDots />
        </View>
      )}
    </>
  );
}