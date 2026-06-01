import React, { useState } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { StatusBar } from "expo-status-bar";

import { Ionicons, FontAwesome } from "@expo/vector-icons";

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

export default function SignInScreen() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const EmailAlpahabets = ["@", ".", "com"];

  const startLoading = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigation.navigate("WelcomeScreen");
    }, 4500);
  };

  const SignIn = () => {
    if (
      input.length === 0 ||
      !EmailAlpahabets.every((item) => input.includes(item))
    ) {
      setMessage("Please enter valid email");

      setTimeout(() => {
        setMessage("");
      }, 3000);
    } else {
      startLoading();
    }
  };

  return (
    <>
      <View
        className="flex-1"
        style={{ backgroundColor: PRIMARY_COLOR }}
      >
        <StatusBar style="light" />

        <View className="flex-row items-center justify-between pt-[60px] px-4">
          <TouchableOpacity
            className="w-10"
            onPress={() => navigation.navigate("WelcomeScreen")}
          >
            <Ionicons name="arrow-back" size={28} color="#fff" />
          </TouchableOpacity>

          <Text
            className="flex-1 text-center text-lg font-bold"
            style={{ color: TEXT_PRIMARY }}
          >
            Signup to start listening
          </Text>

          <View className="w-10" />
        </View>

        <View className="flex-1 justify-center px-4 -mt-[60px]">
          <Text
            className="text-[25px] font-bold leading-10"
            style={{ color: TEXT_PRIMARY }}
          >
            What's your email address?
          </Text>

          <Text
            className="text-base mt-2 mb-5"
            style={{ color: TEXT_SECONDARY }}
          >
            You'll need to confirm this email later.
          </Text>

          <TextInput
            className="h-[58px] text-base px-4 rounded"
            style={{
              borderWidth: 1,
              borderColor: BORDER_COLOR,
              backgroundColor: SECONDARY_COLOR,
              color: TEXT_PRIMARY,
            }}
            value={input}
            onChangeText={(text) => {
              setInput(text);
            }}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor="#B3B3B3"
            selectionColor="#1ED760"
          />

          <Text className="mt-[3px] text-red-500">
            {message}
          </Text>

          <TouchableOpacity
            className="mt-[18px] h-14 rounded-full justify-center items-center"
            style={{ backgroundColor: BTN_PRIMARY_BG }}
            onPress={() => {
              SignIn();
            }}
          >
            <Text
              className="text-base font-bold"
              style={{ color: BTN_PRIMARY_TEXT }}
            >
              Continue
            </Text>
          </TouchableOpacity>

          <Text
            className="text-center text-base font-bold mt-[30px] mb-5"
            style={{ color: TEXT_PRIMARY }}
          >
            Or sign up with
          </Text>

          <TouchableOpacity
            className="h-14 rounded-full flex-row items-center px-5"
            style={{
              borderWidth: 1,
              borderColor: BORDER_COLOR,
            }}
            onPress={() => startLoading()}
          >
            <FontAwesome
              name="google"
              size={22}
              color="#EA4335"
              style={{
                position: "absolute",
                left: 20,
              }}
            />

            <Text
              className="flex-1 text-center text-base font-bold"
              style={{ color: TEXT_PRIMARY }}
            >
              Google
            </Text>
          </TouchableOpacity>
        </View>

        <View className="items-center pb-20">
          <Text
            className="text-[15px]"
            style={{ color: TEXT_SECONDARY }}
          >
            Already have an account?
          </Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LoginScreen");
            }}
          >
            <Text
              className="text-lg font-bold mt-[10px]"
              style={{ color: TEXT_PRIMARY }}
            >
              Log in
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