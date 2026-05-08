import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text } from "react-native";
import Spacer from "../../components/Spacer";
import ThemedButton from "../../components/ThemedButton";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";

const Login = () => {
  const handleSubmit =()=>{
    console.log("submittt from login");
  }
  return (
    <>
      <ThemedView
        style={styles.container}
      >
        <ThemedText style={styles.heroTitle} title={true}>
          Login to your account
        </ThemedText>
          <Spacer marginValue={5}/>
        <ThemedButton onPress={handleSubmit}>
          <Text style={{color:"#eee"}}>
            Login
          </Text>
        </ThemedButton>
        <Spacer marginValue={20}/>
        <Link href="/Register" style={{fontWeight:"bold"}}>
          <ThemedText>Don't have an account ? Register</ThemedText>
        </Link>
      </ThemedView>
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
    fontSize: 30,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  
});
