import { Button, Container, Content, Footer, Form, Icon, Input, Item, Label, Text, View } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import PocketsList from '../../components/PocketsList';

export class WalletAddScreen extends Component<NavigationInjectedProps> {
  public render() {
    return (
      <Container>
        <Content style={styles.content}>
          <Form>
            <Item inlineLabel>
              <Label>Name: </Label>
              <Input />
            </Item>
            <Item inlineLabel>
              <Label>Color: </Label>
              <Input />
            </Item>
            <Item inlineLabel>
              <Label>Icon: </Label>
              <Input />
            </Item>
            <View>
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Pockets</Text>
                <Button
                  icon
                  rounded
                  transparent
                  bordered
                  primary
                  style={styles.addButton}
                  onPress={() => this.props.navigation.navigate('WalletAdd')}
                >
                  <Icon name="add" style={styles.addIcon} />
                </Button>
              </View>
              {/* <PocketForm /> */}
              <PocketsList />
            </View>
          </Form>
        </Content>
        <Footer style={styles.footer}>
          <View>
            <Button success>
              <Text>Create wallet</Text>
            </Button>
          </View>
          <View>
            <Button warning>
              <Text>Cancel</Text>
            </Button>
          </View>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    paddingTop: 30
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 30
  },
  headerTitle: {
    fontFamily: 'Questrial-Regular',
    flex: 2,
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 20
  },
  addButton: {
    marginTop: 10,
    marginRight: 10
  },
  addIcon: {
    fontSize: 20
  },
  footer: {
    flexDirection: 'row',
    height: 46,
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
});

export default WalletAddScreen;
