import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hello Tailwind 🚀
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});