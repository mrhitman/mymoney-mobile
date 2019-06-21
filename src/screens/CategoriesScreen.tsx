import { Container, Content, Icon, List, ListItem, Picker, Text, View } from 'native-base';
import React, { Component } from 'react';
import { StatusBar, StyleSheet } from 'react-native';

const categories = [
  { id: 1, name: 'Food', type: 'outcome' },
  { id: 2, name: 'Entertainments', type: 'outcome' },
  { id: 3, name: 'Salary', type: 'income' },
  { id: 4, name: 'Deposit', type: 'income' }
];

export class CategoriesScreen extends Component {
  public state = {
    selected: 'ALL'
  };

  public render() {
    return (
      <Container style={styles.content}>
        <StatusBar barStyle="light-content" animated />
        <Content padder>
          <View style={styles.accountHeader}>
            <Text style={styles.accountHeaderText}>YOUR CATEGORIES</Text>
            <Picker
              style={styles.accountHeaderFilter}
              textStyle={styles.accountHeaderFilterText}
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              selectedValue={this.state.selected}
              onValueChange={this.handleChangeFilter}
            >
              <Picker.Item label="ALL" value="ALL" />
              <Picker.Item label="INCOME" value="INCOME" />
              <Picker.Item label="OUTCOME" value="OUTCOME" />
            </Picker>
          </View>
          <View>
            <List>
              {categories
                .filter(category => {
                  if (this.state.selected === 'ALL') return true;
                  return this.state.selected.toLowerCase() === category.type.toLowerCase();
                })
                .map(category => (
                  <ListItem key={category.id}>
                    <Text>{category.name}</Text>
                  </ListItem>
                ))}
            </List>
          </View>
        </Content>
      </Container>
    );
  }

  protected handleChangeFilter = (value: string) => {
    this.setState({
      selected: value
    });
  };
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#FEFEFE'
  },
  accountHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20
  },
  accountHeaderText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.6)'
  },
  accountHeaderFilter: {
    marginTop: -13,
    marginLeft: 49
  },
  accountHeaderFilterText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.3)'
  }
});

export default CategoriesScreen;
