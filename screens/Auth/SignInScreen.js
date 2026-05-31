import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
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

export default function SignInScreen() {
  const [input, setInput] = useState("");

  const [message, setMessage] = useState("");

  const navigation = useNavigation();
  const EmailAlpahabets = ["@", ".", "com"];

  const SignIn = () => {
    if (
      input.length === 0 ||
      !EmailAlpahabets.every((item) => input.includes(item))
    ) {
      setMessage("Please enter valid email");

      setTimeout(() => {
        setMessage("");
      }, 3000);
    } else{
        navigation.navigate("WelcomeScreen")
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("WelcomeScreen")}
        >
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.topBarText}>Signup to start listening</Text>

        <View style={styles.placeholder} />
      </View>

      <View style={styles.content}>
        <Text style={styles.heading}>What's your email address?</Text>

        <Text style={styles.subHeading}>
          You'll need to confirm this email later.
        </Text>

        <TextInput
          style={styles.input}
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

        <Text style={styles.Message}>{message}</Text>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => {
            SignIn();
          }}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or sign up with</Text>

        <TouchableOpacity style={styles.socialButton} 
        onPress={()=>{navigation.navigate("WelcomeScreen")}}>
          <FontAwesome
            name="google"
            size={22}
            color="#EA4335"
            style={styles.socialIcon}
          />

          <Text style={styles.socialText}>Google</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account?</Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("LoginScreen");
          }}
        >
          <Text style={styles.footerLink}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: PRIMARY_COLOR,
  },

  topBar: {
    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",

    paddingTop: 60,

    paddingHorizontal: 16,
  },

  backButton: {
    width: 40,
  },

  topBarText: {
    flex: 1,

    textAlign: "center",

    color: TEXT_PRIMARY,

    fontSize: 18,

    fontWeight: "700",
  },

  placeholder: {
    width: 40,
  },

  content: {
    flex: 1,

    justifyContent: "center",

    paddingHorizontal: 16,

    marginTop: -60,
  },

  heading: {
    color: TEXT_PRIMARY,

    fontSize: 25,

    fontWeight: "bold",

    lineHeight: 40,
  },

  subHeading: {
    color: TEXT_SECONDARY,

    fontSize: 16,

    marginTop: 8,

    marginBottom: 20,
  },

  input: {
    height: 58,

    borderWidth: 1,

    borderColor: BORDER_COLOR,

    borderRadius: 4,

    backgroundColor: SECONDARY_COLOR,

    color: TEXT_PRIMARY,

    fontSize: 16,

    paddingHorizontal: 16,
  },

  continueButton: {
    marginTop: 18,
    backgroundColor: BTN_PRIMARY_BG,
    height: 56,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  continueButtonText: {
    color: BTN_PRIMARY_TEXT,

    fontSize: 16,

    fontWeight: "700",
  },

  orText: {
    textAlign: "center",

    color: TEXT_PRIMARY,

    fontSize: 16,

    fontWeight: "700",

    marginTop: 30,

    marginBottom: 20,
  },

  socialButton: {
    height: 56,

    borderWidth: 1,

    borderColor: BORDER_COLOR,

    borderRadius: 30,

    flexDirection: "row",

    alignItems: "center",

    paddingHorizontal: 20,
  },

  socialIcon: {
    position: "absolute",

    left: 20,
  },

  socialText: {
    flex: 1,

    textAlign: "center",

    color: TEXT_PRIMARY,

    fontSize: 16,

    fontWeight: "700",
  },

  footer: {
    alignItems: "center",

    paddingBottom: 80,
  },

  footerText: {
    color: TEXT_SECONDARY,

    fontSize: 15,
  },

  footerLink: {
    color: TEXT_PRIMARY,

    fontSize: 18,

    fontWeight: "700",

    marginTop: 10,
  },

  Message: {
    marginTop: 3,

    color: "red",
  },
});
