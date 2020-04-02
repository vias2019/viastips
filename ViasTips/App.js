import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, ScrollView } from 'react-native';
//import { uuid } from 'uuidv4';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import { AsyncStorage } from 'react-native';

var log = console.log;

const App = () => {
 AsyncStorage.getAllKeys((err, keys) => {
  // console.log(keys);
    AsyncStorage.multiGet(keys, (err, stores) => {
      //log("stores", stores);
     
      setItems(() => {
        var arr = [];
          stores.map((result, i, store) => {
            if(store != null){
            var newobj={};
            newobj =  JSON.parse(store[i][1]);
            var key = store[i][0];
            var value;
            if(newobj == null){
              return [];
            }else{ value  = newobj.text;}
            
            let value1 = newobj.ifPressed;
            arr.push({ "id": key, "text": value, "ifPressed": value1 });
          }else {return arr;}
          }); return arr;
        
      });
    });
  });

  const [list, setItems] = useState();
//log("list:",list);
  
const deleteItem = id => {
    AsyncStorage.removeItem(id);
  };
  
  const ifTextTouched = (id) => {
    AsyncStorage.getItem(id)
      .then((result) => {
        log("this result", result);
        var parse = JSON.parse(result);
        log("this parse", parse);
        parse.ifPressed = !parse.ifPressed;
        log(parse.ifPressed);
        let newObj1={
          text: parse.text,
          ifPressed: parse.ifPressed
        };
        log(id);
        log(newObj1);
        AsyncStorage.mergeItem(id, JSON.stringify(newObj1));
      });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', [{ text: 'OK' }]);
    } else {
      //var id = uuid().toString();
      var idRandom = (Math.floor(Math.random() * 1000000000000));
      var id = idRandom.toString();
      log("id", id);
      var data = { 'text': text, 'ifPressed': false };
      //var combined = {'id': id, 'text':text, 'ifPressed': false};
      var dataToString = JSON.stringify(data);
      console.log('dataToString',  id, dataToString );
      AsyncStorage.setItem(id, dataToString);
      AsyncStorage.getAllKeys((err, keys) => {
        log("keys:",keys);});
    }
  };

  return (
    <View style={styles.container}>
      <Header title='Vias Shopping List' />
      <AddItem addItem={addItem} />

      <FlatList
        data={list}
        renderItem={({ item }) => (
          <ListItem item={item}
            deleteItem={deleteItem}
            ifTextTouched={ifTextTouched}
           // deleteAll={deleteAll}
          />)}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10
  }
});
export default App;