import React from 'react';
import {
  Button,
  StyleSheet,
  View,
  Text
} from 'react-native';
import t from 'tcomb-form-native';
const Contact = t.struct({
  name: t.String,
  email: t.String
});

const Form = t.form.Form;
export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
   // this.handleSubmit= this.handleSubmit.bind(this);
    this.state = {
      contacts: []
    };
  }

  static navigationOptions = {
    header: null,
  };
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log(value);
    this.setState({ contacts: [...this.state.contacts, value]});
  }
  render() {
    const { contacts } =this.state;
    return (  
      <View style={styles.container}>
        <Form type={Contact} ref={c => this._form =c} />
        <Button 
        title='Add' 
        onPress={this.handleSubmit}
        /> 
        <View style={styles.container}>
        { contacts.map((item, key)=>(
         <Text > { item.name } </Text>)
         )}
        </View>
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
