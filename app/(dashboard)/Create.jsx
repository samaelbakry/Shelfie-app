import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import { useBooks } from "../../hooks/useBooks";
import { useRouter } from "expo-router";
import ThemedInput from "../../components/ThemedInput";
import ThemedButton from "../../components/ThemedButton";
import { colors } from "../../constants/colors";

const Create = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const { createBook } = useBooks();
  const router = useRouter();

  const handleSubmit = async ()=> {
    if(!title.trim() && !description.trim() && !author.trim()) return
    setLoading(true)
    await createBook({author , title , description})
    
    setTitle("")
    setDescription("")
    setAuthor("")
    setLoading(false)

    router.replace("/books")

    console.log("created!");
    
  }

  return (
    <>
   <ThemedView style={styles.container} safe={true}>
  <View style={styles.form}>
    <ThemedText style={styles.title}>Add a new book</ThemedText>

    <ThemedInput
      style={styles.input}
      placeholder="Book title"
      value={title}
      onChangeText={setTitle}
    />

    <Spacer marginValue={10} />

    <ThemedInput
      style={styles.input}
      placeholder="Author"
      value={author}
      onChangeText={setAuthor}
    />

    <Spacer marginValue={10} />

    <ThemedInput
      style={[styles.input, styles.inputMultiline]}
      placeholder="Description"
      value={description}
      onChangeText={setDescription}
      multiline
    />

    <Spacer marginValue={14} />

    <ThemedButton onPress={handleSubmit}>
      <Text style={styles.btn}>
        {loading ? "Loading..." : "Create book"}
      </Text>
    </ThemedButton>
  </View>
</ThemedView>
    </>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },

  form: {
    width: "100%",
    padding: 18,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 18,
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
    alignSelf: "center",
    width: "70%",
  },

  input: {
    width: "100%",
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 14,
  },

  inputMultiline: {
    height: 110,
    textAlignVertical: "top",
  },

  btn: {
    backgroundColor: colors.primary,
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },
});