import React, { Component } from 'react';
import { View,SafeAreaView } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
 
//Dummy Data for the MutiSelect
this.items = [
  { id: '1', name: 'Historical places' },
  { id: '2', name: 'Temples' },
  { id: '3', name: 'Churches' },
  { id: '4', name: 'ATM Branch' },
];
 
export default class Dropdownpicker extends Component {
  state = {
    //We will store selected item in this
    selectedItems: [],
  };
 
  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
    //Set Selected Items
  };
 
  render() {
    const { selectedItems } = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 30 }}>
          <MultiSelect
            hideTags
            items={items}
            uniqueKey="id"
            ref={component => {
              this.multiSelect = component;
            }}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={selectedItems}
            selectText="Pick Items"
            searchInputPlaceholderText="Search Items..."
            onChangeInput={text => console.log(text)}
            tagRemoveIconColor="#CCC"
            tagBorderColor="#CCC"
            tagTextColor="#CCC"
            selectedItemTextColor="#CCC"
            selectedItemIconColor="#CCC"
            itemTextColor="#000"
            displayKey="name"
            searchInputStyle={{ color: '#CCC' }}
            submitButtonColor="#48d22b"
            submitButtonText="Submit"
          />
        </View>
      </SafeAreaView>
    );
  }
}