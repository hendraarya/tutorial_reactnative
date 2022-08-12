import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const Cart = props => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.cartWrapper}>
        <Image
          source={require('../../assets/icons/trolleyicon.png')}
          style={styles.iconCart}
        />
        <Text style={styles.notif}>{props.quantity}</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja Anda</Text>
    </View>
  );
};
export default Cart;

const styles = StyleSheet.create({
  wrapper: {padding: 20, alignItems: 'center'},
  cartWrapper: {
    borderWidth: 1,
    borderColor: '#4398D1',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position:
      'relative' /* ini artinya component tidak bergerak secara bebas, sampai keluar component*/,
    marginTop: 40,
  },
  iconCart: {
    width: 50,
    height: 50,
  },
  text: {fontSize: 12, color: '#615f8b', fontWeight: '700', marginTop: 10},
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#6FCF97',
    padding: 4,
    borderRadius: 25,
    width: 24,
    height: 24,
    position:
      'absolute' /*ini artinya component bebas bergerak di dalam aplikasi kita */,
    top: 0,
    right: 0,
  },
});
