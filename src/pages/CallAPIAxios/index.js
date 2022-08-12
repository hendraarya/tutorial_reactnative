import axios, {Axios} from 'axios';
import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const CallAPIAxios = () => {
  //untuk melakukan pemanggilan API di functional component, kita menggunakan useEffect
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  });
  const [dataJob, setDataJob] = useState({
    name: '',
    job: '',
  });

  const getData = () => {
    axios
      .get('https://reqres.in/api/users/3')
      /* di Axios tidak perlu melakukan proses perubahan dari "response" to json, karna sudah datanya sudah berupa json */
      .then(result => {
        setDataUser(result.data.data);
      })
      .catch(err => console.log('err:', err));
  };

  const postData = () => {
    const dataForAPI = {
      name: 'Hendra Arya Syaputra',
      job: 'IT Engineer',
    };
    axios
      .post('https://reqres.in/api/users', dataForAPI)
      .then(result => {
        setDataJob(result.data);
      })
      .catch(err => console.log('err:', err));
  };
  return (
    <View style={styles.wrapper}>
      <Text> Materi Call API dengan Axios</Text>
      <Button title="GET DATA" onPress={getData} />
      <Text>Response GET DATA</Text>
      {dataUser.avatar.length > 0 && (
        <Image source={{uri: dataUser.avatar}} style={styles.avatar} />
      )}
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>
      <View style={styles.line} />
      <Button title="POST DATA" onPress={postData} />
      <Text>Response POST DATA</Text>
      <Text>{dataJob.name}</Text>
      <Text>{dataJob.job}</Text>
    </View>
  );
};
export default CallAPIAxios;

const styles = StyleSheet.create({
  wrapper: {padding: 20},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  avatar: {width: 100, height: 100, borderRadius: 100 / 2},
});
