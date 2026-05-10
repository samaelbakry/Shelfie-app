import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export function useUser(){
    const context = useContext(UserContext)

    if(!context) return

    return context
}