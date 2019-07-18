import React, { Component } from 'react';
import { Text, View, Input, List, ListItem, Left, Icon, Body, Right, Item } from 'native-base';
import Flag from 'react-native-round-flags';
import { defaultCurrencies } from '../store/reducers/currencies';
import { StyleSheet } from 'react-native';

export class PocketAddModal extends Component {
  public state = {
    search: ''
  };

  public render() {
    const { search } = this.state;
    return (
      <View style={{ padding: 20 }}>
        <Item bordered>
          <Input onChangeText={(value) => this.setState({ search: value })} />
        </Item>
        <List>
          {defaultCurrencies
            .filter((currency) => !search || currency.name.includes(search) || currency.short.includes(search))
            .map((currency) => (
              <ListItem key={currency.id}>
                <View style={styles.itemContainer}>
                  <View style={styles.flag}>
                    <Flag code={currency.code} style={{ width: 28, height: 28 }} />
                  </View>
                  <Text>
                    {currency.name} ({currency.short})
                  </Text>
                </View>
                <Right />
              </ListItem>
            ))}
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  flag: {
    marginRight: 16
  }
});

export default PocketAddModal;
