import React,{useState} from 'react'
import {SafeAreaView, View,KeyboardAvoidingView, Text,StatusBar, TextInput, StyleSheet, Dimensions, FlatList,ScrollView, Image} from 'react-native'

import MyInput from "./components/MyInput"
import MyButton from "./components/MyButton"
import ListItem from "./components/ListItem"

const App = () => {

  const [entry,setEntry]=useState("")
  const [list,setList]=useState([])

  changeText=(text)=>{
    setEntry(text)
  }
  
  addToList=()=>{
    let newList=[...list]
    newList.push({myEntry:entry})
    setList(newList)
  }

    return(
      
      
        <SafeAreaView style={styles.container}>    
    
     
        <ScrollView style={{ flex: 1 }} bounces={true}>
        <View style={styles.container}>    
        
        <FlatList
          
        keyExtractor={(item,index)=>index.toString()}
        data={list}
        renderItem={({item})=> <ListItem data={item}></ListItem>}
        />
      
 
        <MyInput myPlace="Bugün neler yapacaksın ?" textChange={changeText} />       
        <MyButton myTitle="Listeme Ekle" myPress={addToList} />
        
        </View>
        </ScrollView>
        
        </SafeAreaView>
        
        
    )


}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',

      backgroundColor: "#f7f7ee"
    },
    
   

})




export default App