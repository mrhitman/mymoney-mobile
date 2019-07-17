import { Icon, Left, List, ListItem, Right, Text, View, Input, Body, Content, Container } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Flag from 'react-native-round-flags';
import ICurrency from '../types/Currency';
import IPocket from '../types/Pocket';

interface PocketsListProps {
  pockets: IPocket[];
  currencies: ICurrency[];
}

export class PocketsList extends Component<PocketsListProps> {
  public render() {
    const { pockets } = this.props;
    return <List>{pockets.map(this.renderPocket)}</List>;
  }

  protected renderPocket = (pocket: IPocket) => {
    const { currencies } = this.props;
    const currency = currencies.find((c) => c.id === pocket.currency_id)!;
    return (
      <ListItem key={pocket.id}>
        <Left style={styles.itemContainer}>
          <Flag
            code={currency.code}
            style={{
              width: 32,
              height: 32
            }}
          />
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, alignItems: 'center' }}>
            <View>
              <Text>{currency.name}</Text>
            </View>
            <View>
              <Input value={pocket.amount.toString()} />
            </View>
            <View>
              <Text>{currency.symbol}</Text>
            </View>
          </View>
        </Left>
        <Right>
          <Icon name="trash" />
        </Right>
      </ListItem>
    );
  };
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row'
  }
});

export default PocketsList;
