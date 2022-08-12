import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

const Item = ({name, email, bidang, onPress, onDelete}) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={require('../../assets/images/membernin/Galuh.jpg')}
          style={styles.avatar}
        />
      </TouchableOpacity>

      <View style={styles.desc}>
        <Text style={styles.descName}>{name}</Text>
        <Text style={styles.descEmail}>{email}</Text>
        <Text style={styles.descBidang}>{bidang}</Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};
const LokalAPI = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bidang, setBidang] = useState('');
  const [users, setUsers] = useState([]);
  const [button, setButton] = useState('Simpan');
  const [selectedUser, setSelectedUser] = useState({});

  /* Fungsi dari useEffect yaitu perintah untuk memunculkan sesuatu data, pada saat aplikasi pertama kali muncul/ di running */
  useEffect(() => {
    getData();
  }, []);

  const submit = () => {
    const data = {
      /*
        biasanya dalam mengirimkan data, penulisannya seperti ini, contoh:
        name(key):namelengkap(value),
        email(key):emailengkap(value),
        bidang(key):bidanglengkap(value),

        NB: jika key dan value, namanya sama, contoh name(key): name(value),
        maka hanya perlu ditulis,seperti penggunaan dibawah ini
        */
      name,
      email,
      bidang,
    };
    if (button === 'Simpan') {
      axios
        .post(
          'http://10.202.10.42:3004/users/',
          data,
        ) /* localhost emulator harus diganti dengan ip local : 10.0.2.2, agar device tidak bingung, soalnya device use localhost */
        .then(res => {
          console.log('res:', res);
          setName('');
          setEmail('');
          setBidang('');
          getData();
        });
    } else if (button === 'Update') {
      axios
        .put(`http://10.202.10.42:3004/users/${selectedUser.id}`, data)
        .then(res => {
          console.log('res update:', res);
          setName('');
          setEmail('');
          setBidang('');
          getData();
          setButton('Simpan');
        });
    }
  };
  const getData = () => {
    axios.get('http://10.202.10.42:3004/users/').then(res => {
      console.log('res get data:', res);
      setUsers(res.data);
    });
  };

  const selectItem = item => {
    console.log('selected item:', item);
    setSelectedUser(item);
    setName(item.name);
    setEmail(item.email);
    setBidang(item.bidang);
    setButton('Update');
  };
  const deleteItem = item => {
    console.log(item);
    axios.delete(`http://10.202.10.42:3004/users/${item.id}`).then(res => {
      console.log('res delete:', res);
      getData();
    });
  };
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>Materi CRUD Lokal API (JSON Server)</Text>
      <Text>Masukkan Anggota Sabalong Coding</Text>
      <TextInput
        placeholder="Nama Lengkap"
        style={styles.input}
        value={name}
        onChangeText={value => setName(value)}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={value => setEmail(value)}
      />
      <TextInput
        placeholder="Bidang"
        style={styles.input}
        value={bidang}
        onChangeText={value => setBidang(value)}
      />
      <Button title={button} onPress={submit} />
      <View style={styles.line} />
      <ScrollView>
        {users.map(user => {
          return (
            <Item
              key={user.id}
              name={user.name}
              email={user.email}
              bidang={user.bidang}
              onPress={() => selectItem(user)}
              onDelete={() =>
                Alert.alert(
                  'Peringatan',
                  'Anda yakin akan menghapus user ini ?',
                  [
                    {text: 'Tidak', onPress: () => console.log('button tidak')},
                    {text: 'Ya', onPress: () => deleteItem(user)},
                  ],
                )
              }
            />
          );
        })}
      </ScrollView>
    </View>
  );
};
export default LokalAPI;

const styles = StyleSheet.create({
  wrapper: {padding: 20},
  textTitle: {textAlign: 'center', marginBottom: 20},
  input: {
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 25,
    paddingHorizontal: 18,
  },
  line: {height: 2, backgroundColor: 'black', marginVertical: 12},
  avatar: {width: 80, height: 80, borderRadius: 80 / 2},
  itemContainer: {flexDirection: 'row', marginBottom: 20},
  desc: {marginLeft: 18, flex: 1},
  descName: {fontSize: 20, fontWeight: 'bold'},
  descEmail: {fontSize: 16},
  descBidang: {fontSize: 12, marginTop: 8},
  delete: {fontSize: 20, fontWeight: 'bold', color: 'red'},
});
