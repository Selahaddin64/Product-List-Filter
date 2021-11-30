import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './ProductInput.styles';

// Gets input from the user
const ProductInput = ({onButton}) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(0);

  const handleInputAdd = () => {
    onButton(productName, productPrice);
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.top_text}>Name</Text>
        <TextInput onChangeText={setProductName} style={styles.input} />
      </View>
      <View style={styles.container}>
        <Text style={styles.bottom_text}>Price</Text>
        <TextInput onChangeText={setProductPrice} style={styles.input} />
      </View>
      <TouchableOpacity onPress={handleInputAdd} style={styles.button}>
        <Text style={styles.button_text}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductInput;
