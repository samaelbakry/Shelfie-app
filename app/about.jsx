import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { colors } from '../constants/colors'

const About = () => {
  const colorScheme = useColorScheme()
  const theme = colors[colorScheme] ?? colors.light
  return (
    <View style={[styles.container , {backgroundColor:theme.background , color:theme.title}]}>
      <Text style={[styles.title]}>About page</Text>
      <Text style={{margin:15}}>Reading app list </Text>
      <Link href={"/"} style={styles.card} >back to home</Link>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"white"
  }
  ,
  title:{
    fontSize:18,
    fontWeight:"bold"
  }
  ,card:{
    backgroundColor:"rgba(157, 155, 155, 0.2)",
    padding:20,
    borderRadius:10,
    marginHorizontal:10,
    boxShadow:'4px 4px 4px rgba(0,0,0,0.1)',
    borderBottomWidth:2,
    borderBottomColor:"red"
  }
})