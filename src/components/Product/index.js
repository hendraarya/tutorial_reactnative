import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';

const Product = props => {
  return (
    <View>
      <View style={styles.wrapper}>
        <Image
          source={require('../../assets/images/relay.jpg')}
          style={styles.imageProduct}
          resizeMode="cover"
        />
        <Text style={styles.productName}>Relay 24VDC OMRON</Text>
        <Text style={styles.productPrice}>Rp.30.000,00</Text>
        <Text style={styles.location}>Bekasi, Jawa Barat</Text>
        <TouchableOpacity style={styles.buttonWripper} onPress={props.onButtonPress}>
          <Text style={styles.buttonText}>Beli</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Product;

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    backgroundColor: '#f2f2f2',
    width: 212,
    borderRadius: 8,
  },
  imageProduct: {width: 188, height: 107, borderRadius: 8},
  productName: {fontSize: 14, fontWeight: 'bold', marginTop: 16},
  productPrice: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#f2994a',
    marginTop: 12,
  },
  location: {fontSize: 12, fontWeight: '300', marginTop: 12},
  buttonText: {fontSize: 14, textAlign: 'center'},
  buttonWripper: {
    backgroundColor: '#66ddaa',
    borderRadius: 5,
    marginVertical: 12,
  },
});
