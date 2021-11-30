import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import Buttons from './components/Buttons';
import TextArea from './components/TextArea';
import ProductInput from './components/ProductInput';

import styles from './App.styles';

export default function App() {
  const [data, setData] = useState([]);

  const handleproductInput = (productName, productPrice) => {
    if (!productName || !productPrice) {
      null;
    } else {
      const Productdata = {
        name: productName,
        price: productPrice,
        date: new Date(),
      };
      setData([Productdata, ...data]);
    }
  };

  const renderProductName = ({item}) => (
    <TextArea productName={item.name} productPrice={item.price} />
  );

  const productSeperator = () => <View style={styles.product_seperator} />;

  const sortİncreasedPrice = () => {
    data.sort((a, b) => a.price - b.price);
    setData([...data]);
  };
  const sortDecreasingPrice = () => {
    data.sort((a, b) => b.price - a.price);
    setData([...data]);
  };
  const productTime = () => {
    data.sort((a, b) => b.date - a.date);
    setData([...data]);
  };

  return (
    <View style={styles.top_container}>
      <Buttons
        increasedPrice={sortİncreasedPrice}
        decreasingPrice={sortDecreasingPrice}
        time={productTime}
      />
      <FlatList
        ItemSeparatorComponent={productSeperator}
        data={data}
        renderItem={renderProductName}
        style={styles.flatList}
      />
      <View style={styles.bottomContainer}>
        <ProductInput
          onButton={handleproductInput}
          style={styles.ProductInput}
        />
      </View>
    </View>
  );
}
