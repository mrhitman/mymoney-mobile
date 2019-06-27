import { Formik } from 'formik';
import { Button, CheckBox, Container, Content, DatePicker, Input, Item, Label, Text, View } from 'native-base';
import React, { Component } from 'react';
import { Picker, StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import { connect } from 'react-redux';
import OperationIcon from '../components/OperationIcon';
import { TRANSACTION_EDIT } from '../store/reducers/transactions';
import ICategory from '../types/Category';
import ITransaction, { ITransactionType } from '../types/Transaction';
import IWallet from '../types/Wallet';

interface TransactionEditScreenProps extends NavigationInjectedProps<{ transaction: ITransaction }> {
  wallets: IWallet[];
  categories: ICategory[];
  transactionEdit: (values) => void;
}

const OperationsSymbols = {
  income: {
    icon: 'plus',
    color: 'rgba(0,255,0,0.65)'
  },
  outcome: {
    icon: 'minus',
    color: 'rgba(255,0,0,0.65)'
  },
  transfer: {
    icon: 'swap',
    color: 'rgba(0,0,255,0.65)'
  }
};

interface TransactionEditScreenState {
  operation: ITransactionType;
}

export class TransactionEditScreen extends Component<
  TransactionEditScreenProps,
  TransactionEditScreenState
  > {
  public state = {
    operation: 'outcome' as ITransactionType
  };

  public get initialValues() {
    const transaction = this.props.navigation.getParam("transaction");
    return {
      ...transaction,
      amount: Math.abs(transaction.amount).toString(),
      date: transaction.date.toJSDate()
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
                <Item fixedLabel>
                  <Label>Date & time</Label>
                  <DatePicker
                    defaultDate={props.values.date}
                    onDateChange={(date: Date) => {
                      props.setFieldValue('date', date);
                    }}
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
                          this.state.operation === 'transfer' ||
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
                {this.state.operation === 'transfer' && (
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
                          wallet =>
                            wallet.id !== props.values.from_wallet_id
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
                {this.state.operation !== 'transfer' && (
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
                        .filter(category => ['income', 'outcome'].includes(category.type))
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
                <Item fixedLabel>
                  <Label>Regular operation:</Label>
                  <CheckBox style={{ margin: 12, marginRight: 20 }} />
                </Item>

                <View style={{ marginTop: 12 }}>
                  <Button info full onPress={props.handleSubmit}>
                    <Text>Update</Text>
                  </Button>
                  <Button warning full onPress={props.handleReset}>
                    <Text>Cancel</Text>
                  </Button>
                </View>
              </>
            )}
          />
        </Content>
      </Container>
    );
  }

  protected handleSubmit = values => {
    this.props.transactionEdit({
      ...values,
      amount:
        this.state.operation === 'outcome'
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
        case 'income':
          return { ...state, operation: 'transfer' };
        case 'outcome':
          return { ...state, operation: 'income' };
        case 'transfer':
          return { ...state, operation: 'outcome' };
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
  (state, ownProps) => ({
    ...state,
    ownProps
  }),
  dispatch => ({
    transactionEdit: values => {
      dispatch({ type: TRANSACTION_EDIT, payload: values });
    }
  })
)(TransactionEditScreen);
