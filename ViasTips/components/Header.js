import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Header = (props) => {
    //alternative const Header = ({title})=>{
  return (
    <View style={styles.header}>
      <Text style={styles.text} >{props.title}</Text>
      {/* alternative <Text style={styles.text}>{title}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: '#361B5A'
  },
  text: {
      fontFamily: 'Brush Script MT',
      color: '#F7FCF7',
      fontSize: 23,
      textAlign: 'center',
      fontStyle: 'italic'
  }
});

export default Header;