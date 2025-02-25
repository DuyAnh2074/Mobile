import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const b5 = () =>{
    const [bgColor, setbgColor] = useState('white');

    const green = () => {
        setbgColor(bgColor === 'white' ? 'green' : 'white');
    };

    const blue = () => {
        setbgColor(bgColor === 'white' ? 'blue' : 'white' );
    };
    const brown = () => {
        setbgColor(bgColor === 'white' ? 'brown' : 'white' );
    };
    const yellow = () => {
        setbgColor(bgColor === 'white' ? 'yellow' : 'white' );
    };
    const red = () => {
        setbgColor(bgColor === 'white' ? 'red' : 'white' );
    };
    const black = () => {
        setbgColor(bgColor === 'white' ? 'black' : 'white' );
    };
return(
<View style={[styles.container, { backgroundColor: bgColor}]}>
<TouchableOpacity style={styles.buttonGreen} onPress={green} >
        <Text style={styles.buttonText}>GREEN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonBlue} onPress={blue} >
        <Text style={styles.buttonText}>BLUE</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonBrown} onPress={brown} >
        <Text style={styles.buttonText}>BROWN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonYellow} onPress={yellow} >
        <Text style={styles.buttonText}>YELLOW</Text>
      </TouchableOpacity>
    
      <TouchableOpacity style={styles.buttonRed} onPress={red} >
        <Text style={styles.buttonText}>RED</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonBlack} onPress={black} >
        <Text style={styles.buttonText}>BLACK</Text>
      </TouchableOpacity>
</View>

);
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: '60',
},
buttonGreen: {
    width: '95%',
    borderRadius:5,
    padding: 20,
    backgroundColor: 'green',
},
buttonBlue: {
    width: '95%',
    borderRadius:5,
    padding: 20,
    backgroundColor: 'blue',
},
buttonBrown: {
    width: '95%',
    borderRadius:5,
    padding: 20,
    backgroundColor: 'brown',
},
buttonYellow: {
    width: '95%',
    borderRadius:5,
    padding: 20,
    backgroundColor: 'yellow',
},
buttonRed: {
    width: '95%',
    borderRadius:5,
    padding: 20,
    backgroundColor: 'red',
},
buttonBlack: {
    width: '95%',
    borderRadius:5,
    padding: 20,
    backgroundColor: 'black',
},
buttonText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
}); 
export default b5;
