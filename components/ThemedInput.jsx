import { TextInput, useColorScheme, StyleSheet } from "react-native";
import { colors } from "../constants/colors";

const ThemedInput = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = colors[colorScheme] ?? colors.light;

  return (
    <TextInput
      placeholderTextColor={theme.textSecondary}
      style={[
        styles.inputField,
        {backgroundColor: theme.navBackground,
         borderColor: theme.border,
         color: theme.text,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedInput;

const styles = StyleSheet.create({
  inputField: {
    height: 48,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 14,
    fontSize: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
});