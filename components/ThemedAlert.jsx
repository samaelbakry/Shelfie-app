import React from "react";
import {Modal,Pressable,StyleSheet,Text,View,useColorScheme,} from "react-native";
import { colors } from "../constants/colors";

const ThemedAlert = ({ visible, errorMsg, onCancel }) => {
  const scheme = useColorScheme();
  const theme = colors[scheme] ?? colors.light;

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View
          style={[
            styles.box,
            {
              backgroundColor: theme.background,
              borderColor: theme.border,
            },
          ]}
        >
            <Text style={[styles.message, { color: theme.text }]}>
            {errorMsg}
          </Text>
          <View
            style={[ styles.bar,
              { backgroundColor: theme.error },
            ]}
          />
          <Pressable
            onPress={onCancel}
            style={[
              styles.btn,
              { backgroundColor: theme.navBackground },
            ]}
          >
            <Text style={{ color: theme.text, fontWeight: "600" }}>
              Cancel
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default ThemedAlert;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
  },

  box: {
    width: "100%",
    borderRadius: 16,
    borderWidth: 1,
    padding: 18,
  },

  bar: {
    height: 4,
    borderRadius: 10,
    marginBottom: 12,
  },

  message: {
    fontSize: 15,
    marginBottom: 16,
    textAlign: "center",
  },

  btn: {
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
});