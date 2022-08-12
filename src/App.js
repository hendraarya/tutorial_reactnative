import React from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import Communication from './pages/Communication';
import BasicJavascript from './pages/BasicJavascript';
import ReactNativeSVG from './pages/ReactNativeSVG';
import CallAPIVanilla from './pages/CallAPIVanilla';
import CallAPIAxios from './pages/CallAPIAxios';
import LokalAPI from './pages/LocalAPI';
import BarcodeScanner from './pages/BarcodeScanner';

const App = () => {
  /*Ini namanya functional component (Jika isi component induk ada lebih dari 1, maka dibungkus dengan Tag <View></View>) , yang akan di Output dari component App Ini*/
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <StylingComponent /> */}
        {/* <FlexBox /> */}
        {/* <Position /> */}
        {/* <PropsDinamis /> */}
        {/* <StateDinamis /> */}
        {/* <Communication /> */}
        {/* <BasicJavascript /> */}
        {/* <ReactNativeSVG /> */}
        {/* <CallAPIVanilla /> */}
        {/* <CallAPIAxios /> */}
        <LokalAPI />
        {/* <BarcodeScanner/> */}
      </ScrollView>
    </View>
  );
};
export default App;
