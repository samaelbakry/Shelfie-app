import { Link } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import Spacer from "../components/Spacer";
import ThemedLogo from "../components/ThemedLogo";
import ThemedText from "../components/ThemedText";
import ThemedView from "../components/ThemedView";
import { colors } from "../constants/colors";

const Index = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo
        style={{
          width: 300,
          height: 100,
          objectFit: "cover",
          borderRadius: 10,
        }}
      />
      <Spacer marginValue={10} />
      <ThemedText style={styles.heroTitle} title={true}>
        Explore The Future of Technology
      </ThemedText>

      <Spacer marginValue={8} />

      <ThemedText style={styles.subtitle}>
        Discover programming, mobile development, UI design, and modern tech
        resources all in one place.
      </ThemedText>
      <Spacer marginValue={8} />
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Link href="/Register" style={styles.card}>
          <ThemedText>create account</ThemedText>
        </Link>
        <Link href="/Login" style={styles.card}>
          <ThemedText>Login now</ThemedText>
        </Link>
        <Link href="/profile" style={styles.card}>
          <ThemedText>profile</ThemedText>
        </Link>
      </View>
    </ThemedView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "800",
    textAlign: "center",
    letterSpacing: 0.5,
  },

  subtitle: {
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
    opacity: 0.8,
    paddingHorizontal: 25,
  },
  card: {
    backgroundColor: "rgba(157, 155, 155, 0.2)",
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    boxShadow: "4px 4px 4px rgba(0,0,0,0.1)",
    borderBottomWidth: 2,
    borderBottomColor:colors.primary,
  },
});
