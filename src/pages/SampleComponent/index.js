import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <Text>Syaputra</Text>
      <Hendra />
      <BoxGreen />
    </View>
  );
};

const Hendra = () => {
  /* ini juga namanya functional component, tapi ini component custom sendiri*/
  return (
    <View>
      <Text>Arya Component</Text>
      <TextInput style={{borderWidth: 1}} />
    </View>
  );
};

class BoxGreen extends Component {
  /*Ini namanya class component, ini component di custom sendiri */
  render() {
    return (
      <View>
        <Text> Ini class Component, Gambar Alam</Text>
        <Image
          source={{uri: 'https://placeimg.com/100/100/nature'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
      </View>
    );
  }
}
export default SampleComponent;