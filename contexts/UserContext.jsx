import { createContext, useEffect, useState } from "react";
import { account } from "../lib/appwrite";
import { ID } from "react-native-appwrite";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false)

  async function login(email, pass) {
    try {
      await account.createEmailPasswordSession(email, pass);
      const response = await account.get();
      setUser(response);
    } catch (error) {
      throw Error(error.message);
    }
  }
  async function register(email, pass) {
    try {
      await account.create(ID.unique(), email, pass);
      await login(email, pass);
    } catch (error) {
      throw Error(error.message);
    }
  }
  async function logout() {
    try {
      await account.deleteSession("current");
      setUser(null);
      console.log("deleted!");
    } catch (error) {
      throw Error(error.message);
    }
  }

  async function getInitialValues() {
    try {
        const response = await account.get();
      setUser(response)
    } catch (error) {
      setUser(null)
        console.log(error);
    }finally{
        setAuthChecked(true)
    }
  }

  useEffect(() => {
   getInitialValues()
  }, [])
  

  return (
    <>
      <UserContext.Provider value={{ user, login, register, logout , authChecked }}>
        {children}
      </UserContext.Provider>
    </>
  );
}
