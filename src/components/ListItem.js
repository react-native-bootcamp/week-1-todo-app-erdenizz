import React, { useState } from 'react'      
import { View, Text, StyleSheet, Dimensions,TouchableOpacity} from 'react-native'

const ListItem = props => {
   const[done,setDone] = useState(false)
   const styles=done ? doneStyles : undoneStyles
   
   doneItem=() => {
       setDone(!done)
   }
   
    return(
 <TouchableOpacity style={styles.container} onPress={doneItem}> 
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={styles.dot}/>      
        <Text style={styles.text}> {props.data.myEntry}</Text> 
   
    </View>
    {
                done && <Text>Yapıldı!</Text>
    }

  </TouchableOpacity>

     
    )
}

const doneStyles = StyleSheet.create({
    container:{
        backgroundColor:"#ff8a65",
        margin:5,
        padding:10,
        borderRadius:5,
        alignItems: 'center',
        flexDirection: 'row',
       justifyContent: 'space-between'
        
    },

    text:{
        fontSize:20,
        marginLeft:10,
        textDecorationLine:"line-through"
    },

    dot:{
        backgroundColor:'black',
        width: 10,
       height: 10,
       borderRadius: 10
    }

})

const undoneStyles = StyleSheet.create({
    container: {
        backgroundColor: "#aed581",
        margin: 5,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 20,
        marginLeft: 10,
    },
    dot: {
        backgroundColor: 'black',
        width: 10,
        height: 10,
        borderRadius: 10
    }
})

export default ListItem