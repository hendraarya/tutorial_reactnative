import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const StylingComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling New Text</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#0d98ba',
          borderWidth: 2,
          borderColor: '#f57919',
          marginVertical: 20,
          marginHorizontal: 20,
        }}
      />
      <View
        style={{
          padding: 12,
          backgroundColor: '#f2f2f2',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={require('../../assets/images/relay.jpg')}
          style={{width: 188, height: 107, borderRadius: 8}}
          resizeMode="cover"
        />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          Relay 24VDC OMRON
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: '#f2994a',
            marginTop: 12,
          }}>
          Rp.30.000,00
        </Text>
        <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
          Bekasi, Jawa Barat
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#66ddaa',
            borderRadius: 5,
            marginVertical: 12,
          }}>
          <Text style={{fontSize: 14, textAlign: 'center'}}>Beli</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#881111',
    marginLeft: 20,
    marginTop: 40,
  },
});

export default StylingComponent;
