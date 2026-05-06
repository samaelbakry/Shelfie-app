import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { colors } from '../constants/colors'
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {
  const colorScheme = useColorScheme()
  const theme = colors[colorScheme] ?? colors.light
  return (
   <>
   <StatusBar value="auto" />
    <View style={{flex:1}}>
        <Stack screenOptions={{headerStyle:{backgroundColor:theme.navBackground }, headerTintColor:theme.title}}>
            <Stack.Screen name='index' options={{title:"Home"}} />
            <Stack.Screen name='about' options={{title:"About"}} />
            <Stack.Screen name='contact' options={{title:"Contact"}} />
        </Stack>
      <Text style={{textAlign:"center" , fontWeight:"bold", backgroundColor:"#eee5" ,padding:10 , fontSize:19 , color:"white"}}>Footer</Text>
    </View>
   </>
  )
}

export default RootLayout

const styles = StyleSheet.create({})