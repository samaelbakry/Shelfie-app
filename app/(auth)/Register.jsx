import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text } from "react-native";
import Spacer from "../../components/Spacer";
import ThemedButton from "../../components/ThemedButton";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";

const Register = () => {
  const handleSubmit =()=>{
    console.log("submittt from register");
  }

  return (
    <>
      <ThemedView
        style={styles.container}
      >
        <ThemedText style={styles.heroTitle} title={true}>
          Create your account immediately
        </ThemedText>
        <Spacer marginValue={8}/>
          <ThemedButton onPress={handleSubmit}>
          <Text style={{color:"#eee"}}>
            Register
          </Text>
        </ThemedButton>
        <Spacer marginValue={20}/>
        <Link href="/Login" style={{fontWeight:"bold"}}>
          <ThemedText>Already have an account ? Login </ThemedText>
        </Link>
      </ThemedView>
    </>
  );
};

export default Register;

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
