import React from 'react';
import {SafeAreaView, TouchableOpacity, Text} from 'react-native';
import styles from './Button.styles';

//Configuring the buttons
const Buttons = ({increasedPrice, decreasingPrice, time}) => {

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={increasedPrice} style={styles.button}>
        <Text style={styles.text}>Artan Fiyat</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={decreasingPrice} style={styles.button}>
        <Text style={styles.text}>Azalan Fiyat</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={time} style={styles.button}>
        <Text style={styles.text}>Tarih</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Buttons;
