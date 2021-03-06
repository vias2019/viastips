import React, {useState} from 'react';
import {View,Text,StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {AsyncStorage} from 'react-native';

const AddItem = ({ addItem}) => {
const [text1, setText]= useState('');
const onChange =(textValue) => setText(textValue);
const clear = ()=> {
    setText(()=>{
        return ('');});
};
const deleteAll = () => {
    AsyncStorage.getAllKeys((err, keys) => {
    console.log("keys:",keys);
    AsyncStorage.multiRemove(keys);
  });
  };
    //alternative const Header = (props)=>{
  return (
    <View>
        <TextInput placeholder="Add Item ..." 
        style={styles.input} value={text1}
        onChangeText={onChange}
        />
        <View style={styles.dialogContentView}>
        <View><TouchableOpacity style={styles.btn} onPress={() => {addItem (text1); clear();}}>
            <Text style={styles.btnText}>
                <Icon name="plus" size={20}/> Add Item
            </Text>
        </TouchableOpacity></View>
        
        <View><TouchableOpacity style={styles.btn} onPress={() => {deleteAll()}}>
            <Text style={styles.btnText}>
            <Icon name="trash" size={20}/> Delete All 
            </Text>
        </TouchableOpacity></View>
        </View>
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
 },
 dialogContentView: {
    // flex: 2,
       flexDirection: 'row',
       justifyContent: 'space-between'
 }      
});

export default AddItem;