import { createContext, useCallback, useEffect, useState } from "react";
import { client, databases } from "../lib/appwrite";
import { ID, Permission, Query, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";

const DATABASE_ID = "6a03222600214578d49b";
const COLLECTION_ID = "books";
export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const { user } = useUser();

 const fetchBooks = useCallback( async ()=> {
    if(!user) return
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [Query.equal("userId", user.$id)],
      );
      setBooks(response.documents);      
      console.log(response.documents);      
    } catch (error) {
      console.log(error);
    }
  },[user])


  async function fetchBookId(id) {
    try {
    } catch (error) {
      console.log(error);
    }
  }
  async function createBook(data) {
    try {
     await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        { ...data, userId: user.$id },
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ],
      );
    } catch (error) {
      console.log(error);
    }
  }
  async function deleteBook() {
    try {
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(!user) return
    let subscribe;
    const channel = `databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`
    if (user) {
      fetchBooks();
      
      subscribe = client.subscribe(channel , (response)=>{
        const { payload , events } = response

        if(events[0].includes("create")){
            setBooks((prev)=>[...prev , payload])
        }
      })
    }else{
        setBooks([])
    }

    return ()=>{
        if(subscribe) subscribe()
    }
  },[user , fetchBooks]);

  return (
    <BooksContext.Provider
      value={{ deleteBook, createBook, fetchBooks, fetchBookId, books }}
    >
      {children}
    </BooksContext.Provider>
  );
}
