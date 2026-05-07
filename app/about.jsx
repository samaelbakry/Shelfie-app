import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { colors } from "../constants/colors";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";
import Spacer from "../components/Spacer";

const About = () => {
  const colorScheme = useColorScheme();
  const theme = colors[colorScheme] ?? colors.light;
  return (
    <ThemedView
      style={[
        styles.container,
        { backgroundColor: theme.background, color: theme.title },
      ]}
    >
      <ThemedText style={styles.heroTitle} title={true}>About TechVerse</ThemedText>

      <Spacer marginValue={10} />

      <ThemedText style={styles.description}>
        TechVerse is a modern platform designed to help developers explore
        programming, mobile applications, UI/UX design, and the latest
        technology trends through a clean and interactive experience.
      </ThemedText>

      <Spacer marginValue={25} />

      <ThemedText style={styles.highlight}>Learn. Build. Grow.</ThemedText>
      <Spacer marginValue={8} />

      <Link href={"/"} style={styles.card}>
        <ThemedText>Back to Home</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  heroTitle: {
    fontSize: 30,
    fontWeight: "800",
    textAlign: "center",
    letterSpacing: 0.5,
  },

  description: {
    fontSize: 16,
    textAlign: "center",
    lineHeight: 26,
    opacity: 0.8,
    paddingHorizontal: 30,
  },

  highlight: {
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  card: {
    backgroundColor: "rgba(157, 155, 155, 0.2)",
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    boxShadow: "4px 4px 4px rgba(0,0,0,0.1)",
    borderBottomWidth: 2,
    borderBottomColor: "red",
  },
});
