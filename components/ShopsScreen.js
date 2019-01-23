import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableHighlight,
  StyleSheet,
  TextInput
} from 'react-native';
import ItemComponent from './ItemComponent';
import {db} from '../Firebase';

// let addItem = item => {  
//   db.ref('/items').push({
//     name: item
//   });
// };



export default class ShopsScreen extends Component {
  state = {
    name: '',
    items:[]
  };
  constructor() {
    super();
    this.itemRef = this.getRef().child('items');

  }

  componentWillMount() {
    this.getItems(this.itemRef);
  }

  getRef() {
    return db.ref();
  }

  getItems(itemsRef) {
    let vm = this;
    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({ items });
    });
  }
  handleChange = e => {
    this.setState({
      name: e.nativeEvent.text
    });
  };
  handleSubmit = () => {
    addItem(this.state.name);
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.items.length > 0 ? (
          <ItemComponent items={this.state.items} />
        ) : (
          <Text>No items</Text>
        )}
         <Button
          title="Add an Item"
          onPress={() => this.props.navigation.navigate('AddShops')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ebebeb'
  }
});