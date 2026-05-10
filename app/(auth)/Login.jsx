import { Link } from "expo-router";
import React, { useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import Spacer from "../../components/Spacer";
import ThemedButton from "../../components/ThemedButton";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import ThemedInput from "../../components/ThemedInput";
import { useUser } from "../../hooks/useUser";
import ThemedAlert from "../../components/ThemedAlert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useUser();

  const handleSubmit = async () => {
    setError("")
    try {
     await login(email, password);
      console.log("submit from login");
    } catch (error) {
      setError(error.message)
    }
  };
  return (
  <>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container} safe={true}>
        <ThemedText style={styles.heroTitle} title={true}>
          Login to your account
        </ThemedText>

        <Spacer marginValue={8} />

        <ThemedInput
          placeholder="Drop your Email"
          style={{ width: "90%", marginBottom: 20 }}
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />

        <ThemedInput
          placeholder="Drop your Password"
          style={{ width: "90%", marginBottom: 20 }}
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />

        <Spacer marginValue={5} />

        <ThemedButton onPress={handleSubmit}>
          <Text style={{ color: "#eee" }}>Login</Text>
        </ThemedButton>

        <Spacer marginValue={20} />

        <Link href="/Register" style={{ fontWeight: "bold" }}>
          <ThemedText>
            Don&apos;t have an account? Register
          </ThemedText>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>

    {error && (
      <ThemedAlert
        visible={true}
        onCancel={() => setError("")}
        errorMsg={error}
      />
    )}
  </>
);
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heroTitle: {
    fontSize: 20,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 12,
    letterSpacing: 0.5,
  }
});
