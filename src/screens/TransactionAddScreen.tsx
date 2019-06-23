import { Container, Content, Form, Input, Item, Label, Text } from 'native-base';
import React, { Component } from 'react';

export class TransactionAddScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item inlineLabel>
              <Label>
                <Text>Some text</Text>
              </Label>
              <Input
                keyboardType="decimal-pad"
                value="0"
                style={{ fontSize: 40, margin: 10, fontWeight: 'bold' }}
              />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default TransactionAddScreen;
