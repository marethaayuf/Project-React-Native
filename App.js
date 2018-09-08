import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import Judul from './Components/Judul';

export default class App extends React.Component{
  render() {
    return (
      <View style={style.container}>
      <Judul/>
        <Text>Nama  : Caesariyanti Maretha Ayu Fadhilah</Text>
        <Text>Kelas : XI RPL1 </Text>
        <Text>Absen : 11</Text>

        <Image
        style={{width:400, height:300}}
        source={require('./maretha.jpg')}
        />
      </View>
    );
  }
}
    const style = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor : '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
