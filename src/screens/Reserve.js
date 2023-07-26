import React from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

export class Reserve extends React.Component {
  constructor() {
    super();
    this.state = {
      isSelected: null,
      validCode: true,
    }
  }

  arrivalTime(input, inputType) {
    let hour, minutes;
    if (inputType === "hour") {
      hour = `0${input}`.slice(-2);
      this.setState({ arrivalHour: hour })

    } else if (inputType === "minutes") {
      minutes = `0${input}`.slice(-2);
      this.setState({ arrivalMinutes: minutes })
    }
  }

  editCode(text){
    let newText = '';
    let numbers = '0123456789';

    for (let i=0; i < text.length; i++) {
      if(numbers.indexOf(text[i]) > -1 ) {
        newText = newText + text[i];
      }
    }
    this.setState({ code: newText });
    for (let i=0; i < text.length; i++) {
      if (!numbers.includes(text[i])) this.setState({ validCode : false})
      else this.setState({ validCode : true})
    }
  }

  submit() {
    console.log(this.state)
  }

  updateBeds(number) {
    this.setState({isSelected: number})
  }

  validForm() {
    let form = this.state;
    if (form.arrivalHour && form.lastName && form.isSelected && form.code && form.code.length && form.validCode) {
      return true;
    } else return false;
  }

  render() {
    let isSelected = this.state.isSelected;
    let code = this.state.code;
    let validCode = this.state.validCode;
    return (
      <View style={styles.container}>
        <View style={styles.apple}></View>
        <View style={styles.header}>
          <View style={{flex:1, marginLeft: 10}}>
            <TouchableHighlight onPress={()=> Actions.home()}>
              <Text style={styles.headerText}>x</Text>
            </TouchableHighlight>
          </View>
          <View style={{flex: 3}}>
            <Text style={styles.headerText}>Reserve your bed(s)</Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.row}>
            <Text style={styles.numberofBedsText}># of beds</Text>
            <View style={styles.row}>
              <TouchableHighlight style={[styles.bedsButton, isSelected==="one" && styles.selected]} onPress={() => this.updateBeds("one")}>
                <Text style={[styles.bedsText, isSelected==="one" && styles.selectedText]}>1</Text>
              </TouchableHighlight>
              <TouchableHighlight style={[styles.bedsButton, isSelected==="two" && styles.selected]} onPress={() => this.updateBeds("two")}>
                <Text style={[styles.bedsText, isSelected==="two" && styles.selectedText]}>2</Text>
              </TouchableHighlight>
              <TouchableHighlight style={[styles.bedsButton, isSelected==="three" && styles.selected]} onPress={() => this.updateBeds("three")}>
                <Text style={[styles.bedsText, isSelected==="three" && styles.selectedText]}>3+</Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={[styles.row, styles.arrival]}>
            <Text style={styles.ETA}>ETA</Text>
            <TextInput style={[styles.inputBox, styles.timeHour]}
              placeholder="00"
              placeholderTextColor="lightgrey"
              maxLength={2}
              keyboardType="numeric"
              onChangeText={hour => this.arrivalTime(hour, 'hour')}
            />
            <Text style={[styles.text, styles.colon]}>:</Text>
            <TextInput style={[styles.inputBox, styles.timeMinute]}
              placeholder="00"
              placeholderTextColor="lightgrey"
              maxLength={2}
              onChangeText={hour => this.arrivalTime(hour, 'minutes')}
            />
            <Text style={[styles.text,styles.pm]}>pm</Text>
          </View>
          <View style={styles.line} />
          <TextInput style={styles.inputBox}
            placeholder="Last Name"
            placeholderTextColor='lightgrey'
            onChangeText={text => this.setState({ lastName : text })}
          />
          <View style={styles.line} />
          <TextInput style={[styles.inputBox, validCode ? styles.validCode : styles.invalidCode]}
            placeholder="Code (numbers only)"
            placeholderTextColor='lightgrey'
            keyboardType='numeric'
            dataDetectorTypes="phoneNumber"
            value={this.state.code}
            onChangeText={code => this.editCode(code)}
            maxLength={6}
          />
          <View style={styles.line} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={[styles.reserveButton, this.validForm() ? styles.validForm : ""]} onPress={() => this.submit()}>
          {/* Actions.reserve()}> */}
            <Text style={[styles.reserveButtonText, this.validForm() ? styles.validFormText : ""] }>Reserve</Text>
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
  row: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
  },
  contentContainer: {
    display: 'flex',
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    display: 'flex',
    flex: 2,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: 50,
  },
  text: {
    fontSize: 20.7,
    color: "#232323",
    fontWeight: "normal",
  },
  numberofBedsText: {
    fontSize: 20.7,
    fontWeight: "normal",
    letterSpacing: 0,
    color: "#232323",
    marginRight: 30,
    marginLeft: 15,
  },
  bedsButton: {
    borderWidth: 2,
    borderColor: '#f2f2f2',
    borderRadius: 10,
    backgroundColor: 'lightgrey',
    width: 60,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bedsText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#232323',
  },
  selected: {
    backgroundColor: '#232323',
  },
  selectedText: {
    color: 'lightgrey',
  },
  inputBox: {
    width: 300,
    height: 20.3,
    fontSize: 20.7,
    color: "#232323",
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    marginTop: 25,
    marginBottom: 5,
    paddingLeft: 15,
  },
  validCode: {
    color: 'green',
  },
  invalidCode: {
    color: 'red',
  },
  arrival: {
    position: 'relative',
    zIndex: 1,
    alignItems: 'center',
  },
  ETA: {
    fontSize: 20.7,
    fontWeight: "normal",
    color: "#232323",
    marginRight: 5,
    marginLeft: 15,
    paddingTop: 18,
  },
  timeHour: {
    width: 50,
  },
  timeMinute: {
    width: 50,
    paddingLeft: 5,
  },
  colon: {
    position: 'absolute',
    left: 98,
    top: 20,
    zIndex: 9,
  },
  pm: {
    position: 'absolute',
    left: 145,
    top: 22,
    zIndex: 9,
  },
  reserveButton: {
    borderWidth: 2,
    borderColor: '#232323',
    borderRadius: 10,
    marginBottom: 50,
    backgroundColor: '#f2f2f2',
  },
  reserveButtonText: {
    color: '#232323',
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  validForm: {
    backgroundColor: '#232323',
  },
  validFormText: {
    color: '#f2f2f2',
  },
  line: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1.5,
    // borderWidth: 4,
    width: 350,
    maxWidth: '80%',
    marginVertical: 3,
  }
});
