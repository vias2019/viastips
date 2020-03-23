import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, ScrollView } from 'react-native';
import { uuid } from 'uuidv4';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import {AsyncStorage} from 'react-native';

const App = () => {
  const [list, setItems] = useState([
    { id: uuid(), text: 'Milk', ifPressed: true },
    { id: uuid(), text: 'Egs', ifPressed: true },
    { id: uuid(), text: 'Chips', ifPressed: false },
    { id: uuid(), text: 'Bread', ifPressed: false }
  ]);
  

  const deleteItem = id => {
    setItems(prevItems => {
      console.log("PrevItems: ", prevItems);
      return prevItems.filter(item1 => item1.id !== id);
    });
  };
  
  const ifTextTouched = id => {
     setItems(() => { 
       return  ( 
        list.map( (listee) => {
           const container=listee;
              if (container.id == id) {
            container.ifPressed = !container.ifPressed;
           }
           return container;
         })
         
        );
      }
     );  
  };

  //persisting data
  _storeData = async () => {
    try {
      await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
    } catch (error) {
      // Error saving data
    }
  };

  const addItem = (text) => {
    console.log("TExT", typeof(text));
    if (!text) {
      Alert.alert('Error', 'Please enter an item', [{ text: 'OK' }]);
    } else {
      setItems(prevItems => {
        console.log([{ id: uuid(), text, ifPressed: false }, ...prevItems]);
        return [{ id: uuid(), text, ifPressed: false }, ...prevItems];

      });
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