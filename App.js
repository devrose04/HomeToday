import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { HomePage } from './src/screens/HomePage';
import { Reserve } from './src/screens/Reserve';
import { Map } from './src/screens/Map';

// export default class App extends React.Component {
//   render() {
//     return (
//       // <View style={styles.container}>
//         <HomePage />
//       // </View>
//     );
//   }
// }

const App = () => (
  <Router>
    <Stack key="root">
      <Scene key="home" component={HomePage} title="Home"
             hideNavBar="true" />
      <Scene key="reserve" component={Reserve} title="Reserve"
             hideNavBar="true" />
      <Scene key="map" component={Map} title="Map"
             hideNavBar="true" />
    </Stack>
  </Router>
);

export default App;

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
    alignItems: 'flex-end',
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
