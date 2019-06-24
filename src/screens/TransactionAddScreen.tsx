import { Container, Content, Form, Input, Item, Label, Text, Icon, View } from 'native-base';
import React, { Component } from 'react';
import { Picker } from 'react-native';
import { connect } from 'react-redux';
import ICategory from '../types/Category';
import IWallet from '../types/Wallet';

interface TransactionAddScreenProps {
  wallets: IWallet[];
  categories: ICategory[];
}

enum Operations {
  income,
  outcome,
  transfer
}

const OperationsSymbols = {
  [Operations.income]: 'plus',
  [Operations.outcome]: 'minus',
  [Operations.transfer]: 'swap',
};

interface TransactionAddScreenState {
  operation: Operations;
}

export class TransactionAddScreen extends Component<
  TransactionAddScreenProps,
  TransactionAddScreenState
> {
  public state = {
    operation: Operations.outcome
  };

  public render() {
    const { categories, wallets } = this.props;
    return (
      <Container>
        <Content padder style={{ margin: 10 }}>
          <Form>
            <Item inlineLabel >
              <View onTouchEndCapture={this.handleChangeOperation} >
                <Label style={{ marginRight: 25 }} >
                    <Icon
                      type="Entypo"
                      name={OperationsSymbols[this.state.operation]}
                      style={{ fontSize: 50, lineHeight: 80, height: 120, color: 'rgba(255,0,0,0.65)' }}
                    />
                </Label>
              </View>
              <Input
                keyboardType="decimal-pad"
                placeholder="0"
                style={{
                  fontSize: 65,
                  fontWeight: 'bold',
                  lineHeight: 80,
                  height: 130
                }}
              />
            </Item>
            <Item picker fixedLabel>
              <Label>
                <Text>From wallet:</Text>
              </Label>
              <Picker
                mode="dropdown"
                onValueChange={() => ({})}
                style={{ flex: 1 }}
              >
                {wallets.map(wallet => (
                  <Picker.Item
                    key={wallet.id}
                    label={wallet.name}
                    value={wallet.id}
                  />
                ))}
              </Picker>
            </Item>
            {this.state.operation === Operations.transfer && <Item picker fixedLabel>
                <Label>
                  <Text>To wallet:</Text>
                </Label>
                <Picker
                  mode="dropdown"
                  onValueChange={() => ({})}
                  style={{ flex: 1 }}
                >
                  {wallets.map(wallet => (  // @TODO Filter FROM wallet
                    <Picker.Item
                      key={wallet.id}
                      label={wallet.name}
                      value={wallet.id}
                    />
                  ))}
                </Picker>
              </Item>
            }
            <Item picker fixedLabel>
              <Label>
                <Text>Category:</Text>
              </Label>
              <Picker
                mode="dropdown"
                onValueChange={() => ({})}
                style={{ flex: 1 }}
              >
                {categories.map(category => (
                  <Picker.Item
                    key={category.id}
                    label={category.name}
                    value={category.id}
                  />
                ))}
              </Picker>
            </Item>
            <Item fixedLabel>
              <Label>Description:</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }

  protected handleChangeOperation = () => {
    this.setState(state => {
      switch (state.operation) {
        case Operations.income:
          return { ...state, operation: Operations.outcome };
        case Operations.outcome:
          return { ...state, operation: Operations.transfer };
        case Operations.transfer:
          return { ...state, operation: Operations.income };
      }
    });
  };
}

export default connect(
  state => state,
  () => ({})
)(TransactionAddScreen);
