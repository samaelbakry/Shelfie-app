import React from "react";
import { FlatList, Pressable, StyleSheet, View } from "react-native";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import { useBooks } from "../../hooks/useBooks";
import ThemedCard from "../../components/ThemedCard";
import { colors } from "../../constants/colors";

const Books = () => {
  const { books } = useBooks();
  return (
    <>
      <ThemedView style={styles.container} safe={true}>
        <View style={styles.view} >
          <Spacer marginValue={10} />

        <ThemedText style={styles.heroTitle} title={true}>
          Perfect time to read is now 📚
        </ThemedText>

        <Spacer marginValue={20} />

        <FlatList
          data={books}
          keyExtractor={(item) => item.$id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Pressable
              style={({ pressed }) => [styles.pressable,
                pressed && styles.cardPressed,
              ]}
            >
              <ThemedCard style={styles.card}>
                <ThemedText style={styles.bookTitle} title={true}>{item.title}</ThemedText>
                <Spacer marginValue={6} />
                <ThemedText style={styles.author}>
                  Written by {item.author}
                </ThemedText>
              </ThemedCard>
            </Pressable>
          )}
        />
        </View>
      </ThemedView>
    </>
  );
};

export default Books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 10,
  },
  view:{
    width: "100%",
    padding: 18,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: "800",
    textAlign: "center",
    letterSpacing: 0.5,
    lineHeight: 32,
  },

  list: {
    paddingBottom: 20,
  },

  pressable: {
    marginBottom: 14,
  },

  cardPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },

  bookTitle: {
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 24,
    color:colors.primary
  },

  author: {
    fontSize: 14,
    color: "#F5F5F5",
    fontWeight: "500",
  },
});