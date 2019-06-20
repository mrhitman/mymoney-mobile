import { Container, Content, Text, View } from 'native-base';
import React, { Component } from 'react';
import { StatusBar, StyleSheet } from 'react-native';

export class CategoriesScreen extends Component {
  render() {
    return (
      <Container style={styles.content}>
        <StatusBar barStyle="light-content" animated />
        <Content padder>
          <View style={styles.accountHeader}>
            <Text style={styles.accountHeaderText}>YOUR CATEGORIES</Text>
            <Text style={styles.accountHeaderFilter}>ALL</Text>
          </View>
          <View>
            
          </View>
        </Content>
      </Container>
    );
  }
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
    fontSize: 19,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.3)'
  }
});

export default CategoriesScreen;
