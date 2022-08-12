import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';

const Story = props => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        source={props.gambar}
        style={{width: 70, height: 70, borderRadius: 70 / 2}}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>
        {props.namamember}
      </Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <Text>Materi Props Dinamis</Text>

      <ScrollView horizontal>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Story
            namamember="Agus Sutriyono"
            gambar={require('../../assets/images/membernin/Agus.jpg')}
          />
          <Story
            namamember="Aulia Desky"
            gambar={require('../../assets/images/membernin/Desky.jpg')}
          />
          <Story
            namamember="Dindin K"
            gambar={require('../../assets/images/membernin/Dindin.jpg')}
          />
          <Story
            namamember="Lutfi Galuh"
            gambar={require('../../assets/images/membernin/Galuh.jpg')}
          />
          <Story
            namamember="Siswoyo Hadi"
            gambar={require('../../assets/images/membernin/Siswoyo.jpg')}
          />
          <Story
            namamember="Deni Priatna"
            gambar={require('../../assets/images/membernin/Deni.jpg')}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default PropsDinamis;

const styles = StyleSheet.create({});

/* fungsi dari props yaitu untuk membuat component menjadi dinamis, menghemat codingan, mengedit 1 component (untuk sesuatu yang berulang-ulang), untuk mengubah banyak component 
 props itu adalah sebuah param*/
