import React, {useState} from 'react';
import {View,Text,StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {AsyncStorage} from 'react-native';

const AddItem = ({addItem}) => {
const [text1, setText]= useState('');
const onChange =(textValue) => setText(textValue);
const clear = ()=> {
    setText(()=>{
        return ('');});
};
    //alternative const Header = (props)=>{
  return (
    <View>
        <TextInput placeholder="Add Item ..." 
        style={styles.input} value={text1}
        onChangeText={onChange}
        />
        <TouchableOpacity style={styles.btn} onPress={() => {addItem (text1); clear();}}>
            <Text style={styles.btnText}>
                <Icon name="plus" size={20}/>Add Item
            </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
 input:{
     height: 60,
     padding: 8,
     fontSize: 16
 },
 btn: {
     backgroundColor: '#c2bad8',
     padding: 9,
     margin: 5
 },
 btnText: {
     color: 'darkslateblue',
     fontSize: 20,
     textAlign: 'center'
 }
  
});

export default AddItem;