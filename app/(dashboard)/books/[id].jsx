import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import Spacer from "../../../components/Spacer";
import ThemedText from "../../../components/ThemedText";
import ThemedView from "../../../components/ThemedView";

import ThemedCard from "../../../components/ThemedCard";
import ThemedLoader from "../../../components/ThemedLoader";
import { colors } from "../../../constants/colors";
import { useBooks } from "../../../hooks/useBooks";
import ThemedButton from "../../../components/ThemedButton";

const BooksDetails = () => {
  const { id } = useLocalSearchParams();

  const [book, setBook] = useState(null);
  const router = useRouter()

  const { fetchBookId, deleteBook } = useBooks();
  const handleDelete = async ()=>{
    await deleteBook(id)
    setBook(null)
    router.replace("/books")
  }

  useEffect(() => {
    const handleFetch = async () => {
      if (!id) return;

      try {
        const bookData = await fetchBookId(id);
        setBook(bookData);
      } catch (error) {
        console.log("Failed to fetch book:", error);
      }
    };

    handleFetch();
  }, [id]);

  if (!book) {
    return (
      <ThemedView style={styles.container} safe={true}>
        <ThemedLoader />
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container} safe={true}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <ThemedCard style={styles.card}>
          <View style={styles.header}>
            <View style={styles.badge}>
              <ThemedText style={styles.badgeText}>Book Details</ThemedText>
            </View>

            <Spacer marginValue={18} />

            <ThemedText title style={styles.title}>
              {book.title}
            </ThemedText>
          </View>
          <Spacer marginValue={10} />

          <View style={styles.authorContainer}>
            <ThemedText muted style={styles.label}>
              Author
            </ThemedText>

            <Spacer marginValue={6} />

            <ThemedText style={styles.author}>{book.author}</ThemedText>
          </View>

          <Spacer marginValue={24} />

          <ThemedText style={styles.sectionTitle} title={true}>
            Description
          </ThemedText>

          <Spacer marginValue={10} />

          <ThemedText style={styles.description}>{book.description}</ThemedText>
        </ThemedCard>
        <Spacer marginValue={19} />
        <ThemedButton style={styles.btn} onPress={handleDelete}>
          <ThemedText style={{ color: "white" }}>Delete book</ThemedText>
        </ThemedButton>
      </ScrollView>
    </ThemedView>
  );
};

export default BooksDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    backgroundColor: colors.light.error,
    paddingVertical: 16,
    borderRadius: 16,
    alignSelf:"center",
  },
  content: {
    padding: 20,
  },

  card: {
    borderRadius: 24,
  },

  title: {
    fontSize: 30,
    lineHeight: 38,
  },

  authorContainer: {
    borderRadius: 14,
  },

  label: {
    fontSize: 13,
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  author: {
    fontSize: 18,
    fontWeight: "600",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
  },

  description: {
    fontSize: 16,
    lineHeight: 28,
  },
  header: {
    alignItems: "flex-start",
  },
  badge: {
    backgroundColor: colors.primary,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 50,
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
});
