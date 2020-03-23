import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';



const ListItem = ({ item, deleteItem, ifTextTouched }) => {
 
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}  >
        <Text 
        style={item.ifPressed ? styles.ifDone : styles.listItemText} 
        onPress={() => ifTextTouched(item.id)} 
        >{item.text}</Text>
        <Icon name="remove" size={20} color='firebrick'
          onPress={() => deleteItem(item.id)} />
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  listItemText: {
    fontSize: 18
  },
  ifDone: {
    fontSize: 18,
    textDecorationLine: 'line-through'
  }
});

export default ListItem;