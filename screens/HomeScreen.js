import React from 'react';
import {
  Button,
  StyleSheet,
  View,
} from 'react-native';
import t from 'tcomb-form-native';
const Contact = t.struct({
  name: t.String,
  email: t.String
});

const Form = t.form.Form;
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value',value);
  }
  render() {
    return (
      <View style={styles.container}>
        <Form type={Contact} ref={c => this._form =c} />
        <Button 
        title='Add' 
        onPress={this.handleSubmit}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#fff',
  },
    
});
