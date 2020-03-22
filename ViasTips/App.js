import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, ScrollView } from 'react-native';
import { uuid } from 'uuidv4';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

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
      //console.log("delete Items: ", prevItems.filter(item1 => item1.id !== id));
      return prevItems.filter(item1 => item1.id !== id);
    });
  };
  // const getStyle = (list) => {
  //   console.log("*****get style",list);
    
  //   return {
  //     textDecorationLine: list.ifPressed ? 'line-through' : 'none'
  //   };
  // };

  
  const ifTextTouched = id => {
    //console.log("item1 id: ", id);
    //console.log("list: ", list);
     setItems(() => { 
       return  ( 
        list.map( (listee) => {
          // console.log(listee);
           const container=listee;
              if (container.id == id) {
            container.ifPressed = !container.ifPressed;
           }
           //console.log("container",container);
           return container;
         })
         
        );
      }
     );  
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', [{ text: 'OK' }]);
    } else {
      setItems(prevItems => {
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
          //<Text>{item.text}</Text>
          <ListItem item={item}
            //keyExtractor={item => item.id}
            //getStyle={getStyle}
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