import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const ListItem = ({ item, deleteItem, ifTextTouched }) => {
 
  return (
    <TouchableOpacity style={item.ifPressed ? styles.listItemIfDone : styles.listItem}>
      <View style={styles.listItemView}  >
        <Text 
        style={item.ifPressed ? styles.ifDone  : styles.listItemText} 
        onPress={() => ifTextTouched(item.id)} 
        >{item.text}</Text>
        <Icon name="remove" size={20} color='#9B6074'
          onPress={() => deleteItem(item.id)} />
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  listItem: {
    padding: 13,
    backgroundColor: '#F6F3FA',
    borderBottomWidth: 1,
    borderColor: '#C7CBC6'
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
  },
  listItemIfDone: {
    padding: 13,
    backgroundColor: '#E9DAFC',
    borderBottomWidth: 1,
    borderColor: '#C7CBC6'
  }
});

export default ListItem;