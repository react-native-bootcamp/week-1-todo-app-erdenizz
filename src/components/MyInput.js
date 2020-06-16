import React from 'react'
import {SafeAreaView, View, Text, TextInput, StyleSheet, Dimensions,} from 'react-native'

const MyInput = props => {
    return(
        
            <View style ={styles.inputContainer }>
            <TextInput style ={{color:'#455a64'}}
           
            
            placeholder = {props.myPlace}
            onChangeText={props.textChange}
        
            />

           

            

            </View>

        

    
    )


}

const styles = StyleSheet.create ({
    inputContainer: {
        backgroundColor : '#b6eb7a',
        padding :10 ,
        margin : 20,
        borderRadius : 5,
    }
     
})






export default MyInput