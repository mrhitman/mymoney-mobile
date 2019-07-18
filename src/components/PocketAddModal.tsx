import { Input, Item, List, ListItem, Text, View } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Flag from 'react-native-round-flags';
import { defaultCurrencies } from '../store/reducers/currencies';

interface PocketAddModalProps {
  onSelect: (currencyId: string) => void;
}

export class PocketAddModal extends Component<PocketAddModalProps> {
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
              <ListItem key={currency.id} onPress={this.handleSelect(currency.id)}>
                <View style={styles.itemContainer}>
                  <View style={styles.flag}>
                    <Flag code={currency.code} style={{ width: 28, height: 28 }} />
                  </View>
                  <Text>
                    {currency.name} ({currency.short})
                  </Text>
                </View>
              </ListItem>
            ))}
        </List>
      </View>
    );
  }

  protected handleSelect = (currencyId: string) => () => {
    this.props.onSelect(currencyId);
  };
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
