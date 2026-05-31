import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { PRIMARY_COLOR } from "../../theme/theme";

export default function SignInScreen() {
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

        <Text style={styles.topBarText}>
          Sign up to start listening
        </Text>

        <View style={styles.placeholder} />
      </View>

      {/* SignIn Container */}
      
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
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },

  backButton: {
    width: 40,
  },

  topBarText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    flex: 1,
  },

  placeholder: {
    width: 40,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
  },

  heading: {
    color: "#FFFFFF",
    fontSize: 42,
    fontWeight: "bold",
    lineHeight: 50,
  },
});