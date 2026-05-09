import React from "react";
import { StyleSheet } from "react-native";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";

const profile = () => {
  return (
    <>
      <ThemedView style={styles.container} safe={true}>
        <Spacer marginValue={8} />
        <ThemedText style={styles.heroTitle} title={true}>
          your email
        </ThemedText>
        <Spacer marginValue={8} />
        <ThemedText style={styles.heroTitle} title={true}>
          Prefect time to start is now !
        </ThemedText>
      </ThemedView>
    </>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heroTitle: {
    fontSize: 30,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 12,
    letterSpacing: 0.5,
  },
});
