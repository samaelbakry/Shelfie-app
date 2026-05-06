import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import logo from "../assets/images/download (5).jpg"
import { Image } from 'react-native'
import { Link } from 'expo-router'

const Index = () => {
  return (
    <View style={styles.container}>
     <Image source={logo} style={{width:200 , height:200 , objectFit:'cover', margin:10 , borderRadius:10}}/>
      <Text style={styles.title}>Home page</Text>
      <Text style={{marginTop:15 , marginBottom:15}}>Reading app list </Text>
      <View style={{display:"flex", justifyContent:"center" ,flexDirection:"row"}}>
        <Link href={"/about"} style={styles.card} >about page</Link>
        <Link href={"/contact"} style={styles.card} >contact page</Link>
      </View>
    </View>
  )
}

export default Index

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