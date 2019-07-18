import { Button, Icon, List, SwipeRow, Text, View, Input, Item } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Flag from 'react-native-round-flags';
import ICurrency from '../types/Currency';
import IPocket from '../types/Pocket';

interface PocketsListProps {
  pockets: IPocket[];
  currencies: ICurrency[];
  onDelete: (id: string) => void;
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
      <SwipeRow
        key={pocket.id}
        rightOpenValue={-60}
        body={
          <View style={styles.itemContainer}>
            <View style={styles.itemLeft}>
              <Flag code={currency.code} style={styles.flag} />
              <Text>{currency.name}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Item underline style={styles.amountInput}>
                <Input defaultValue="0" keyboardType="numeric" />
              </Item>
            </View>
          </View>
        }
        right={
          <Button danger onPress={this.handleDelete(currency.id)}>
            <Icon active name="trash" />
          </Button>
        }
      />
    );
  };

  protected handleDelete = (currencyId: string) => () => {
    this.props.onDelete(currencyId);
  };
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
  },
  itemLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  flag: {
    width: 28,
    height: 28,
    margin: 4,
    marginRight: 10
  },
  amountInput: {
    marginLeft: 10,
    marginRight: 10
  }
});

export default PocketsList;
