import React from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import MapView from 'react-native-maps';

export class Map extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }


  render() {

    return (
      <View style={styles.container}>
        <View style={{flex:1}}>
          <View style={styles.apple}></View>
          <View style={styles.header}>
            <View style={{flex:1, marginLeft: 10}}>
              <TouchableHighlight onPress={()=> Actions.home()}>
                <Text style={styles.headerText}>x</Text>
              </TouchableHighlight>
            </View>
            <View style={{flex: 3}}>
              <Text style={styles.headerText}>Find Beds & Services</Text>
            </View>
          </View>
        </View>
        <View style={styles.mapContainer}>
         <MapView
            style={styles.map}
            initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#f2f2f2',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
    container: {
      ...StyleSheet.absoluteFillObject,
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    mapContainer: {
      ...StyleSheet.absoluteFillObject,
      marginTop: 54,
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    apple: {
      height: 24,
      flexDirection: 'row',
      width: '100%',
      paddingTop: 10,
      backgroundColor: 'white'
    },
    header: {
      flexDirection: 'row',
      height: 30,
      width: '100%',
      backgroundColor: '#232323',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerText: {
      color: '#f2f2f2',
      fontSize: 20,
    },
});
