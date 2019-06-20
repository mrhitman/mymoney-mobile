import { List, ListItem, Text, View } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

export class PocketsList extends Component {
  render() {
    return (
      <List>
        <ListItem>
          <View style={styles.itemContainer}>
            <Text>UAH</Text>
            <Text> 0</Text>
          </View>
        </ListItem>
        <ListItem>
          <View style={styles.itemContainer}>
            <Text>USD</Text>
            <Text> 0</Text>
          </View>
        </ListItem>
        <ListItem>
          <View style={styles.itemContainer}>
            <Text>EUR</Text>
            <Text> 0</Text>
          </View>
        </ListItem>
      </List>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
  }
});

export default PocketsList;
