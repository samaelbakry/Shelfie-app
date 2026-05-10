import React from "react";
import { StyleSheet, Text } from "react-native";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import { useUser } from "../../hooks/useUser";
import ThemedButton from "../../components/ThemedButton";

const Profile = () => {
  const { logout , user }= useUser()

  return (
    <>
      <ThemedView style={styles.container} safe={true}>
        <Spacer marginValue={8} />
        <ThemedText>
          {user.email }
        </ThemedText>
        <ThemedText style={styles.heroTitle} title={true}>
          your email
        </ThemedText>
        <Spacer marginValue={8} />
        <ThemedText style={styles.heroTitle} title={true}>
          Prefect time to start is now !
        </ThemedText>
        <Spacer marginValue={8} />
        <ThemedButton onPress={logout}>
          <Text style={{color:"#fefefe", fontWeight:"bold"}}>
            Logout
          </Text>
        </ThemedButton>
      </ThemedView>
    </>
  );
};

export default Profile;

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
