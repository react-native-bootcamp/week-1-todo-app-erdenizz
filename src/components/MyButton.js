import React from 'react'
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native'

const MyButton = props => {
    return (
    <TouchableOpacity 
        style={styles.buttonContainer}
        onPress={props.myPress}
    >
        <Text style ={styles.textStyle}>{props.myTitle} </Text>
    </TouchableOpacity>    
    )
    
    
}

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor:'#b6eb7a',
        width: Dimensions.get("window").width / 2,
        alignSelf: 'center',
        padding: 15,
        margin: 5,
        alignItems: 'center',
        justifyContent:'center',
    
        borderRadius: 5,
        
    },
    textStyle:{
       color:'#455a64',
        fontWeight: 'bold'
        
    }
})



export default MyButton