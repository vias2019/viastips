
AsyncStorage.getItem('keys', (err, result) => {
   
    var data = {'id': uuid().toString(), 'text': text, 'ifPressed': false };
    var newArray=[];
    var pushedData=newArray.push(data);
    if (result !== null) {
        alert('Data Found');
      console.log('Data Found', result);
      var newIds = JSON.parse(result).concat(data);
      AsyncStorage.setItem('keys', JSON.stringify(newIds));
      setItems(newIds);
    } else {
        alert('Data is not found!');
      console.log('Data Not Found');
      AsyncStorage.setItem('keys', JSON.stringify(pushedData));
      setItems(data);
    }
  });

  const getAllData = () =>{
    AsyncStorage.getAllKeys().then((keys) => {
      return AsyncStorage.multiGet(keys)
        .then((result) => {
          console.log(result);
        }).catch((e) =>{
          console.log(e);
        });
    });
  }