import React from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  useColorScheme,
  View,
} from "react-native";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import { useBooks } from "../../hooks/useBooks";
import ThemedCard from "../../components/ThemedCard";
import { colors } from "../../constants/colors";
import { useRouter } from "expo-router";

const Books = () => {
  const { books } = useBooks();
  const colorScheme = useColorScheme();
  const theme = colors[colorScheme] ?? colors.light;

  const router= useRouter()
  

  return (
    <>
      <ThemedView style={styles.container} safe={true}>
        <View style={styles.view}>
          <ThemedText style={styles.heroTitle} title={true}>
            Perfect time to read is now 📚
          </ThemedText>

          <Spacer marginValue={10} />
          <FlatList
            data={books}
            keyExtractor={(item) => item.$id}
            contentContainerStyle={styles.list}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
              onPress={()=>router.push(`/books/${item.$id}`)}
                style={({ pressed }) => [
                  styles.pressable,
                  pressed && styles.cardPressed,
                ]}
              >
                <ThemedCard style={styles.card}>
                  <ThemedText
                    style={[
                      styles.bookTitle,
                      {
                        backgroundColor: theme.navBackground,
                        color: colors.primary,
                      },
                    ]}
                    title={true}
                  >
                    {item.title}
                  </ThemedText>
                  <Spacer marginValue={6} />
                  <ThemedText style={{ color: theme.text}}>
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
    justifyContent: "center",
  },
  view: {
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
  },
});
