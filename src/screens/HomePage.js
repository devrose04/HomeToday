import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

export class HomePage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.apple}></View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Home Tonight</Text>
        </View>
        <View style={styles.topContainer}>
          <Text style={styles.text}>Know where you are staying tonight</Text>
          <Text style={styles.text}>Don't stand in line again</Text>
          <Text style={styles.text}>Stay at work until you need to</Text>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableHighlight style={styles.reserveButton} onPress={()=> Actions.reserve()}>
            <Text style={styles.reserveButtonText}>Reserve your bed</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.reserveButton} onPress={()=> Actions.map()}>
            <Text style={styles.reserveButtonText}>View the Map</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  apple: {
    height: 24,
    flexDirection: 'row',
    width: '100%',
    paddingTop: 10,
    backgroundColor: 'white'
  },
  header: {
    height: 30,
    // flexDirection: 'row',
    width: '100%',
    backgroundColor: '#232323',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#f2f2f2',
    fontSize: 20,
  },
  topContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  bottomContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 30,
    color: '#232323'
  },
  reserveButton: {
    borderWidth: 2,
    borderColor: '#f2f2f2',
    borderRadius: 10,
    marginBottom: 50,
    backgroundColor: '#232323',
  },
  reserveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 20,
    paddingVertical: 10,
  }
});
