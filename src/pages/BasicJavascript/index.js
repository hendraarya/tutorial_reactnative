import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BasicJavascript = () => {
  //tipeData primitve
  const nama = 'Hendra Arya'; //typedata String
  let usia = 24; //number
  const jenisKelamin = true; //boolean (if true laki-laki, false perempuan)

  //tipeData complex
  const hewanPeliharaan = {
    nama: 'Miaw',
    jenis: 'Kucing',
    usia: 2,
    apakahHewanLokal: true,
    warna: 'kuning',
    orangTua: {
      jantan: 'Kaisar',
      betina: 'kuin',
    },
  }; // object

  const sapaOrang = (name, age) => {
    return console.log(`Hello ${name} usia anda ${age}`);
  }; // Function
  sapaOrang('Hendra', 24);

  const namaOrang = ['Hendra', 'Arya', 'Syaputra', 'Harith']; //object-array

  const sapaHewan = objectHewan => {
    /*penggunaan if else biasa */
    // let hasilSapa = '';
    // if (objectHewan.nama === 'Miaw') {
    //   hasilSapa = 'Hallow Miaw, apa kabar ?';
    // } else {
    //   hasilSapa = 'Ini hewan Siapa';
    // }
    // return hasilSapa;

    return objectHewan.nama === 'Miaw'
      ? 'Hallow Miaw, apa kabar ?'
      : 'Ini hewan siapa?';
    // artinya ? = maka, : = else (ini namanya tenery operator, ini digunakan juka logic-nya hanya 1 / tidak banyak/bertingkat2, jika bertingkat2 gunain ifelse biasa)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi Basic Javascript</Text>
      <Text>Name : {nama}</Text>
      <Text>Age : {usia}</Text>
      <Text>Name Cat: {hewanPeliharaan.nama}</Text>
      <Text>Name Parent Cat: {hewanPeliharaan.orangTua.jantan}</Text>
      <Text>Name People: {namaOrang[0]}</Text>
      <Text>ResultSapa : {sapaHewan(hewanPeliharaan)}</Text>
      <Text>======Perulangan (Looping)=======</Text>
      {namaOrang.map(
        (
          NamaOrang /*ini contoh perulangan, "NamaOrang" itu bebas, bisa diganti apasaja, karna itu buat penamaan variable aja buat dilooping */,
        ) => (
          <Text>{NamaOrang}</Text>
        ),
      )}
    </View>
  );
};
export default BasicJavascript;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
});
