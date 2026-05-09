import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { colors } from '../constants/colors'

const RootLayout = () => {
  const colorScheme = useColorScheme()
  const theme = colors[colorScheme] ?? colors.light
 
  return (
   <>
   <StatusBar style="auto" />
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