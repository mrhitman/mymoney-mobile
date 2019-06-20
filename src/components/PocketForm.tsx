import { Button, Input, Item, Label, Text, View } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

interface PocketFormProps {
  onAdd?: (values: any) => void;
  onCancel?: () => void;
}

interface PocketFormState {}

export class PocketForm extends Component<PocketFormProps, PocketFormState> {
  public render() {
    return (
      <View style={styles.pockets}>
        <Item inlineLabel>
          <Label>Currency: </Label>
          <Input keyboardType="numeric" />
        </Item>
        <Item inlineLabel>
          <Label>Amount: </Label>
          <Input keyboardType="numeric" />
        </Item>
        <View style={styles.buttonsContainer}>
          <Button block rounded success>
            <Text>Add</Text>
          </Button>
          <Button block rounded warning>
            <Text>Cancel</Text>
          </Button>
        </View>
      </View>
    );
  }

  protected handleAdd = () => {
    this.props.onAdd && this.props.onAdd({});
  }

  protected handleCancel = () => {

    this.props.onCancel && this.props.onCancel();
  }
}

const styles = StyleSheet.create({
  pockets: {
    padding: 20,
    paddingLeft: 30
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 14
  }
});

export default PocketForm;
