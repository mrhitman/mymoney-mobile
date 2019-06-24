import { Formik } from 'formik';
import { Button, Container, Content, Input, Item, Label, Text, View } from 'native-base';
import React, { Component } from 'react';
import { Picker, StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import { connect } from 'react-redux';
import OperationIcon from '../components/OperationIcon';
import ICategory from '../types/Category';
import IWallet from '../types/Wallet';

interface TransactionAddScreenProps extends NavigationInjectedProps {
  wallets: IWallet[];
  categories: ICategory[];
  transactionAdd: (values) => void;
}

enum Operations {
  income,
  outcome,
  transfer
}

const OperationsSymbols = {
  [Operations.income]: {
    icon: 'plus',
    color: 'rgba(0,255,0,0.65)'
  },
  [Operations.outcome]: {
    icon: 'minus',
    color: 'rgba(255,0,0,0.65)'
  },
  [Operations.transfer]: {
    icon: 'swap',
    color: 'rgba(0,0,255,0.65)'
  }
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

  public get initialValues() {
    const { categories, wallets } = this.props;
    return {
      amount: '',
      from_wallet_id: wallets[0].id,
      to_wallet_id: '',
      category_id: categories[0].id,
      description: ''
    };
  }

  public render() {
    const { categories, wallets } = this.props;
    const operation = OperationsSymbols[this.state.operation];
    return (
      <Container>
        <Content padder style={{ margin: 10 }}>
          <Formik
            initialValues={this.initialValues}
            onSubmit={this.handleSubmit}
            onReset={this.handleReset}
            render={props => (
              <>
                <Item inlineLabel>
                  <View onTouchEndCapture={this.handleChangeOperation}>
                    <Label style={{ marginRight: 25 }}>
                      <OperationIcon operation={operation} />
                    </Label>
                  </View>
                  <Input
                    keyboardType="decimal-pad"
                    placeholder="0"
                    value={props.values.amount}
                    onChangeText={props.handleChange('amount')}
                    style={styles.amountPicker}
                  />
                </Item>
                <Item picker fixedLabel>
                  <Label>
                    <Text>From wallet:</Text>
                  </Label>
                  <Picker
                    mode="dropdown"
                    onValueChange={props.handleChange('from_wallet_id')}
                    selectedValue={props.values.from_wallet_id}
                    style={styles.picker}
                  >
                    {wallets
                      .filter(
                        wallet =>
                          this.state.operation === Operations.transfer ||
                          wallet.id !== props.values.to_wallet_id
                      )
                      .map(wallet => (
                        <Picker.Item
                          key={wallet.id}
                          label={wallet.name}
                          value={wallet.id}
                        />
                      ))}
                  </Picker>
                </Item>
                {this.state.operation === Operations.transfer && (
                  <Item picker fixedLabel>
                    <Label>
                      <Text>To wallet:</Text>
                    </Label>
                    <Picker
                      mode="dropdown"
                      onValueChange={props.handleChange('to_wallet_id')}
                      selectedValue={props.values.to_wallet_id}
                      style={styles.picker}
                    >
                      <Picker.Item label="Not selected" value="" />
                      {wallets
                        .filter(
                          wallet => wallet.id !== props.values.from_wallet_id
                        )
                        .map(wallet => (
                          <Picker.Item
                            key={wallet.id}
                            label={wallet.name}
                            value={wallet.id}
                          />
                        ))}
                    </Picker>
                  </Item>
                )}
                {this.state.operation !== Operations.transfer && (
                  <Item picker fixedLabel>
                    <Label>
                      <Text>Category:</Text>
                    </Label>
                    <Picker
                      mode="dropdown"
                      selectedValue={props.values.category_id}
                      onValueChange={props.handleChange('category_id')}
                      style={styles.picker}
                    >
                      {categories
                        .filter(category => {
                          switch (this.state.operation) {
                            case Operations.income:
                              return category.type === 'income';
                            case Operations.outcome:
                              return category.type === 'outcome';
                            default:
                              return false;
                          }
                        })
                        .map(category => (
                          <Picker.Item
                            key={category.id}
                            label={category.name}
                            value={category.id}
                          />
                        ))}
                    </Picker>
                  </Item>
                )}
                <Item fixedLabel>
                  <Label>Description:</Label>
                  <Input
                    value={props.values.description}
                    onChangeText={props.handleChange('description')}
                  />
                </Item>
                <Button success full onPress={props.handleSubmit}>
                  <Text>Create</Text>
                </Button>
                <Button warning full onPress={props.handleReset}>
                  <Text>Cancel</Text>
                </Button>
              </>
            )}
          />
        </Content>
      </Container>
    );
  }

  protected handleSubmit = values => {
    this.props.transactionAdd({
      ...values,
      amount:
        this.state.operation === Operations.outcome
          ? -values.amount
          : values.amount
    });
    this.props.navigation.goBack();
  };

  protected handleReset = () => {
    this.props.navigation.goBack();
  };

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

const styles = StyleSheet.create({
  amountPicker: {
    fontSize: 65,
    fontWeight: 'bold',
    lineHeight: 80,
    height: 130
  },
  picker: {
    flex: 1
  }
});

export default connect(
  state => state,
  dispatch => ({
    transactionAdd: values => {
      dispatch({ type: 'TRANSACTION_ADD', payload: values });
    }
  })
)(TransactionAddScreen);
