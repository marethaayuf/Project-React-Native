import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Nama : Caesariyanti Maretha Ayu Fadhilah</Text>
        <Text>Kelas : XI RPL1 </Text>
        <Text>No Absen : 11</Text>
        <Image style={{width:400, height:300}}
        source={require('./maretha.jpg')}
        />
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
