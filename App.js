import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native';
// import TextSpeech from './Components/TextSpeech';
// import Imagepicker from './Components/Imagepicker';

import CurrentLocation from './Components/CurrentLocation';
// import SliderImage from './Components/SliderImage';
// import Video from './Components/Video';
// import Dropdownpicker from './Components/Dropdownpicker';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
{/* <TextSpeech/> */}
{/* <Imagepicker/> */}
<CurrentLocation/>
{/* <SliderImage/> */}
{/* <Video/> */}
{/* <Dropdownpicker/> */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});