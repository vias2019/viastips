import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, ScrollView } from 'react-native';
import { uuid } from 'uuidv4';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import { AsyncStorage } from 'react-native';

var log = console.log;

const App = () => {
  //  //var result2 = [['123', '{"text": "bread", "ifPressed": false}']];
  // const buildState = (result) => {
  //   //console.log("result",result);
  //   var newObject={};
  //   var newArray=[];


  //     result.map((item) => {
  //       newObject = JSON.parse(item[1]);
  //       newObject.id = item[0];
  //       console.log('newObject', newObject);
  //       newArray.push(newObject);
  //       console.log("newArray:", newArray);

  //     });

  //   return newArray;
  //   //return newObject;
  //   };
  //buildState(result2);

  // AsyncStorage.getItem('text').then((value) => setState({ 'text': value }));
  //AsyncStorage.clear();
  // AsyncStorage.setItem('123', '{"text": "bread", "ifPressed": false}');
  //AsyncStorage.setItem('124', '{"text": "rasberry", "ifPressed": false}');
  //AsyncStorage.setItem('125', '{"text": "salt", "ifPressed": false}');

  //   function getKeys (){

  //  AsyncStorage.getAllKeys().then((keys) => {
  //       return AsyncStorage.multiGet(keys)
  //         .then((result) => {
  //           console.log("result1111:", result);
  //           //let y=buildState(result);
  //           console.log("yyyyyy:",y);
  //           setItems ({y});
  //         });
  //         // .catch((e) => {
  //         //   console.log(e);
  //         // });
  //     }); 
  //     //log("h",h);
  //     //return(h);
  //   }


  // const getUserId = async () => {

  //   try {
  //     let h= await AsyncStorage.getAllKeys();
  //       let y= await AsyncStorage.multiGet(h);
  //         let u =((result) => {
  //           console.log("result1111:", result);
  //           let y=buildState(result);
  //           console.log("yyyyyy:",u);
  //           return (u);
  //         });return h;
  //     }
  //    catch (error) {
  //     // Error retrieving data
  //     console.log(error.message);
  //   }
  // };

  // useEffect(() => {
  //   setItems({getKeys()});
  // });

  //   var getAllDatas = () => {
  //     AsyncStorage.getAllKeys((err, keys) => {
  //       AsyncStorage.multiGet(keys, (err, stores) => {
  //         setItems({ stores });
  //       });
  //     });
  //   };
  // getAllDatas();

  var getStored = AsyncStorage.getAllKeys((err, keys) => {
    AsyncStorage.multiGet(keys, (err, stores) => {
      var arr = [];
      //log("stores", stores);
      setItems(() => {
        let arr = [];
        stores.map((result, i, store) => {

          let newobj = JSON.parse(store[i][1]);
          // get at each store's key/value so you can work with it
          let key = store[i][0];
          let value = newobj.text;
          let value1 = newobj.ifPressed;
          arr.push({ "id": key, "text": value, "ifPressed": value1 });
        }); return arr;
      });
    });
  });

  const [list, setItems] = useState();
  // [
  //  { id: uuid(), text: 'Milk', ifPressed: true }
  // ]
  //,
  // { id: uuid(), text: 'Egs', ifPressed: true },
  // { id: uuid(), text: 'Chips', ifPressed: false },
  // { id: uuid(), text: 'Bread', ifPressed: false }
  //); 

  const deleteItem = id => {
    AsyncStorage.removeItem(id);
    //   setItems(prevItems => {
    //     console.log("PrevItems: ", prevItems);
    //     return prevItems.filter(item1 => item1.id !== id);
    //   });
  };

 
const ifTextTouched = (id) => {


 AsyncStorage.getItem(id)

.then((result) =>{
  log("this result", result);
  var parse = JSON.parse(result);
   log("this parse",parse);
     parse.ifPressed=!parse.ifPressed;
     log(parse.ifPressed);
     AsyncStorage.mergeItem(parse.id, parse.text, JSON.stringify(parse.ifPressed));
    });
   //console.log(typeof (item.id));
    //  setItems(() => {
    //   return (
    //     list.map((listee) => {
    //       const container = listee;
    //       if (container.id == id) {
    //         container.ifPressed = !container.ifPressed;
    //       }
    //       console.log("container",container);
    //       return container;
    //     })
    //   );
    // });

      //AsyncStorage.mergeItem();
    //   container.ifPressed = !container.ifPressed;
    // }
    // console.log("container", container);
    // return container;
         
};
  

  const addItem = (text) => {

    //   clearAsyncStorage = async() => {
    //     AsyncStorage.clear();
    // };
    //AsyncStorage.clear();
    //AsyncStorage.setItem('123', '{"text": "bread", "ifPressed": false}');
    //var result2 = [['123', '{"text": "bread", "ifPressed": false}']];

    //works! 
    // var buildState = (result) => {
    //   console.log(result);
    //   return (
    //     result.map((item) => {
    //       var newObject = JSON.parse(item[1]);
    //       newObject.id = item[0];
    //       console.log('newObject', newObject);
    //       return (
    //         newObject

    //       );
    //     })
    //   );
    // };
    //buildState(result2);

    // //works!
    //   AsyncStorage.getAllKeys().then((keys) => {
    //     return AsyncStorage.multiGet(keys)
    //       .then((result) => {
    //         console.log("Get All Keys",result);
    //         setItems(
    //             buildState(result)
    //         );
    //       }).catch((e) =>{
    //         console.log(e);
    //       });
    //   });
    //........................................
    if (!text) {
      Alert.alert('Error', 'Please enter an item', [{ text: 'OK' }]);
    } else {
    var id = uuid().toString();
    var data = { 'text': text, 'ifPressed': false };
    //var combined = {'id': id, 'text':text, 'ifPressed': false};
    var dataToString=JSON.stringify(data);
    console.log('dataToString',{id, dataToString});
    // if (keys !== null) {
    //   alert('Data Found');
    //   AsyncStorage.setItem(id, dataToString);

    //   // setItems(()=>{
    //   //   return (buildState(result));}
    //   // );
    // } else {
    //   alert('Data is not found!');
    //   console.log('Data Not Found');
    //   AsyncStorage.setItem(id, JSON.stringify(data));
      // setItems(() => {
      //   buildState(res);
      // });
    //}
    //...........................
 AsyncStorage.setItem(id,  dataToString);
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
            deleteItem = {deleteItem}
            ifTextTouched = {ifTextTouched}
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