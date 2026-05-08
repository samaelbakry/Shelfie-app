import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { colors } from '../constants/colors'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { Ionicons } from '@expo/vector-icons'

const RootLayout = () => {
  const colorScheme = useColorScheme()
  const theme = colors[colorScheme] ?? colors.light
  const [loaded] = useFonts({
    ...Ionicons.font
  })
   if (!loaded) {
    return null;
  }

  return (
   <>
   <StatusBar value="auto" />
    <View style={{flex:1}}>
        <Stack screenOptions={{headerStyle:{backgroundColor:theme.navBackground }, headerTintColor:theme.title}}>
            <Stack.Screen name='(auth)' options={{headerShown:false}} />
            <Stack.Screen name='(dashboard)' options={{headerShown:false}} />
            <Stack.Screen name='index' options={{title:"Home"}} />
        </Stack>
      <Text style={{textAlign:"center" , fontWeight:"bold", backgroundColor:theme.navBackground ,padding:30 , fontSize:14 , color:theme.text}}>@2026 all copyrights reserved</Text>
    </View>
   </>
  )
}

export default RootLayout

const styles = StyleSheet.create({})