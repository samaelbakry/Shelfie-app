import React from "react";
import ThemedView from "./ThemedView";
import { ActivityIndicator, useColorScheme } from "react-native";
import { colors } from "../constants/colors";

export default function ThemedLoader() {
  const colorScheme = useColorScheme();
  const theme = colors[colorScheme] ?? colors.light;
  return (
    <>
      <ThemedView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator color={theme.text} size={"large"} />
      </ThemedView>
    </>
  );
}
