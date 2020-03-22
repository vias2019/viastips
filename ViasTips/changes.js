

// const [list, setItems] = useState({currentList: [
//     { id: uuid(), text: 'Milk', ifPressed: true },
//     { id: uuid(), text: 'Egs', ifPressed: true },
//     { id: uuid(), text: 'Chips', ifPressed: false },
//     { id: uuid(), text: 'Bread', ifPressed: false }
//   ]});

//   const ifTextTouched = id => {
//     list.currentList.map(listee => {
//       if (listee.id == id) {
//         listee.ifPressed = !listee.ifPressed;
//       }
//     }); 
//     setItems({currentList : list.currentList});
//   };

//   //delete getStyle completely
  
//   <FlatList
//         data={list.currentList}
//         renderItem={({ item }) => (
//           //<Text>{item.text}</Text>
//           <ListItem item={item}
//             //keyExtractor={item => item.id}
//             deleteItem={deleteItem}
//             ifTextTouched={ifTextTouched}
//           />)}
//       />


//in ListItem.js 

      // return (
      //   <TouchableOpacity style={styles.listItem}>
      //     <View style={styles.listItemView}  >
      //       <Text style={item.ifPressed ? styles.listItemText : styles.ifDone} 
      //       onPress={() => ifTextTouched(item.id)} 
      //       >{item.text}</Text>
      //       <Icon name="remove" size={20} color='firebrick'
      //         onPress={() => deleteItem(item.id)} />
      //     </View>
      //   </TouchableOpacity>
      // );








// const list =[
//   { id: 1, text: 'Milk', ifPressed: true },
//   { id: 2, text: 'Egs', ifPressed: true },
//   { id: 3, text: 'Chips', ifPressed: false },
//   { id: 4, text: 'Bread', ifPressed: false }
// ];


 
//       const x = list.map(listee => {
//         const container={};
//         if (container[listee.id] == 2) {

//          container[listee.ifPressed] = !container[listee.ifPressed];
//         }
//         return container;
//       });
      
 

// console.log(list);