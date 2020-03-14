import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import { uuid } from 'uuidv4';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';


const App = () => {
  const [items, setItems] = useState([
    { id: uuid(), text: 'Milk' },
    { id: uuid(), text: 'Egs' },
    { id: uuid(), text: 'Chips' },
    { id: uuid(), text: 'Bread' }
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem = (text) => {
    // if(!text){
    //   Alert.alert('Error', 'Please enter an item',{text: "OK"});
    // } else{
    setItems(prevItems => {
      return [{id: uuid(), text}, ...prevItems];
    });
  //}
  };

  return (
    <View style={styles.container}>
      <Header title='Vias Tips' />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) =>(
          //<Text>{item.text}</Text>}
          <ListItem item={item} 
          deleteItem={deleteItem}/>)}
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