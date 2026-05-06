import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact page</Text>
      <Link href={"/"} style={styles.card} >back to home</Link>
    </View>
  )
}

export default Contact

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
    fontWeight:"bold",
    margin:15
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