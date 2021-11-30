import React from 'react';
import {View, Text} from 'react-native';
import styles from './TextArea.styles';

// İnputs are printed
const TextArea = ({productName, productPrice}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{productName}</Text>
      <Text style={styles.text}>{productPrice} TL</Text>
    </View>
  );
};

export default TextArea;
