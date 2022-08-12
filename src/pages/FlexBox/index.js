import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

class FlexBox extends Component {
  render() {
    console.log('hello debugger');
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#c8d6e5',
            alignItems: 'center',
            justifyContent:
              'space-between' /* space-between untuk memberikan jarak antara tiap2 component */,
          }}>
          <View style={{backgroundColor: '#ee5253', width: 40, height: 50}} />
          <View style={{backgroundColor: '#feca57', width: 40, height: 50}} />
          <View style={{backgroundColor: '#1dd1a1', width: 40, height: 50}} />
          <View style={{backgroundColor: '#f5ff', width: 40, height: 50}} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text>Bereranda</Text>
          <Text>Video</Text>
          <Text>PlayList</Text>
          <Text>Komunitas</Text>
          <Text>Channel</Text>
          <Text>Tentang</Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <Image
            source={require('../../assets/images/hendra.jpg')}
            style={{width: 100, height: 100, borderRadius: 50}}
          />
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Hendra Arya</Text>
            <Text>1000 ribu subscriber</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default FlexBox;

/*Fungsi dari flex yaitu jenis layout yang memenuhi ukuran layar yang ada (penggunaan flex sebagai pengganti penggunaan width) */
