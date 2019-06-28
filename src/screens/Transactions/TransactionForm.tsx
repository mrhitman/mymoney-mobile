import { FormikProps } from 'formik';
import { Button, CheckBox, DatePicker, Input, Item, Label, Text, View } from 'native-base';
import React, { Component } from 'react';
import { Picker, StyleSheet } from 'react-native';
import OperationIcon from '../../components/OperationIcon';
import ICategory from '../../types/Category';
import ICurrency from '../../types/Currency';
import { ITransactionType } from '../../types/Transaction';
import IWallet from '../../types/Wallet';

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

interface TransactionFormProps {
    formik: FormikProps<any>;
    wallets: IWallet[];
    currencies: ICurrency[];
    categories: ICategory[];
    handleReset: () => void;
    handleChangeOperation: (operation: ITransactionType) => void;
    isNew?: boolean;
}

interface TransactionFormState {
    operation: ITransactionType;
}

export class TransactionForm extends Component<TransactionFormProps, TransactionFormState> {
    public state = {
        operation: 'outcome' as ITransactionType
    };

    public render() {
        const { formik, wallets, currencies, categories, isNew } = this.props;
        const operation = OperationsSymbols[this.state.operation];
        return (
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
                        value={formik.values.amount}
                        onChangeText={formik.handleChange('amount')}
                        style={styles.amountPicker}
                    />
                </Item>
                <Item fixedLabel>
                    <Label>Date & time</Label>
                    <DatePicker
                        defaultDate={formik.values.date}
                        onDateChange={(date: Date) => {
                            formik.setFieldValue('date', date);
                        }}
                    />
                </Item>
                <Item picker fixedLabel>
                    <Label>
                        <Text>From wallet:</Text>
                    </Label>
                    <Picker
                        mode="dropdown"
                        onValueChange={formik.handleChange('from_wallet_id')}
                        selectedValue={formik.values.from_wallet_id}
                        style={styles.picker}
                    >
                        {wallets
                            .filter(
                                wallet =>
                                    this.state.operation === 'transfer' ||
                                    wallet.id !== formik.values.to_wallet_id
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
                            onValueChange={formik.handleChange('to_wallet_id')}
                            selectedValue={formik.values.to_wallet_id}
                            style={styles.picker}
                        >
                            <Picker.Item label="Not selected" value="" />
                            {wallets
                                .filter(
                                    wallet =>
                                        wallet.id !== formik.values.from_wallet_id
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
                            selectedValue={formik.values.category_id}
                            onValueChange={formik.handleChange('category_id')}
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
                        value={formik.values.description}
                        onChangeText={formik.handleChange('description')}
                    />
                </Item>
                <Item fixedLabel>
                    <Label>Regular operation:</Label>
                    <CheckBox style={{ margin: 12, marginRight: 20 }} />
                </Item>

                <View style={{ marginTop: 12 }}>
                    <Button info full onPress={formik.handleSubmit}>
                        <Text>{isNew ? 'Create' : 'Update'}</Text>
                    </Button>
                    <Button warning full onPress={formik.handleReset}>
                        <Text>Cancel</Text>
                    </Button>
                </View>
            </>
        )
    }

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

export default TransactionForm