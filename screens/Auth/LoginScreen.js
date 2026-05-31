import React from "react";
import {
  View,
  Text,
  StyleSheet,
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

export default function LoginScreen() {
  const navigation = useNavigation();

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

        <Text style={styles.topBarText}>Log in to Spotify</Text>

        <View style={styles.placeholder} />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Email</Text>

        <TextInput
          style={styles.input}
          placeholder=""
          placeholderTextColor="#B3B3B3"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="email"
          textContentType="emailAddress"
          selectionColor="#1ED760"
        />

        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or log in with</Text>

        <TouchableOpacity style={styles.socialButton}>
          <View style={styles.socialLeft}>
            <FontAwesome name="google" size={22} color="#EA4335" />
          </View>
          <Text style={styles.socialText}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <View style={styles.socialLeft}>
            <FontAwesome name="facebook-official" size={22} color="#1877F2" />
          </View>
          <Text style={styles.socialText}>Facebook</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account?</Text>

        <TouchableOpacity onPress={()=>{navigation.navigate("SignInScreen")}}>
          <Text style={styles.signUpText}>Sign up</Text>
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
    paddingHorizontal: 20,
  },

  backButton: {
    width: 40,
  },

  topBarText: {
    flex: 1,
    textAlign: "center",
    color: TEXT_PRIMARY,
    fontSize: 20,
    fontWeight: "700",
  },

  placeholder: {
    width: 40,
  },

  content: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 120,
  },

  label: {
    color: TEXT_PRIMARY,
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 10,
  },

  input: {
    height: 55,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 4,
    backgroundColor: SECONDARY_COLOR,
    color: TEXT_PRIMARY,
    fontSize: 16,
    paddingHorizontal: 15,
  },

  continueButton: {
    marginTop: 18,
    backgroundColor: BTN_PRIMARY_BG,
    height: 55,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  continueText: {
    color: BTN_PRIMARY_TEXT,
    fontWeight: "700",
    fontSize: 16,
  },

  orText: {
    color: TEXT_PRIMARY,
    textAlign: "center",
    marginTop: 25,
    marginBottom: 20,
    fontSize: 15,
    fontWeight: "600",
  },

  socialButton: {
    height: 55,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    paddingHorizontal: 20,
  },

  socialLeft: {
    width: 30,
  },

  socialText: {
    flex: 1,
    textAlign: "center",
    color: TEXT_PRIMARY,
    fontSize: 16,
    fontWeight: "600",
    marginRight: 30,
  },

  footer: {
    alignItems: "center",
    paddingBottom: 40,
  },

  footerText: {
    color: TEXT_SECONDARY,
    fontSize: 15,
  },

  signUpText: {
    color: TEXT_PRIMARY,
    fontSize: 16,
    fontWeight: "700",
    marginTop: 8,
  },
});