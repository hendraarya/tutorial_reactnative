import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Illustrations from '../../assets/images/brainstroaming.svg';

const ReactNativeSVG = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>
        Materi Import File Foto React Native bertipe SVG
      </Text>
      <Illustrations width={244} height={125} />
    </View>
  );
};
export default ReactNativeSVG;

const styles = StyleSheet.create({
  wrapper: {padding: 20},
  textTitle: {textAlign: 'center'},
});
