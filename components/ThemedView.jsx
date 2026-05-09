import { View, useColorScheme } from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ThemedView = ({ style,safe=false ,...props }) => {

  const colorScheme = useColorScheme();
  const inset= useSafeAreaInsets()
  const theme = colors[colorScheme] ?? colors.light;

  if(!safe) return (
    <View
      style={[{ backgroundColor: theme.background }, style]}
      {...props}
    />
  )
   return <>
    <View
      style={[{ 
        backgroundColor: theme.background,
        paddingBottom:inset.bottom,
        paddingTop:inset.top
       }, style]}
      {...props}
    />
   </>
};

export default ThemedView;
