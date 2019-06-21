import { Container, Content, Header, List, ListItem, Body, Tab, Tabs, Text, View, Left, Right, Icon } from 'native-base';
import React, { Component } from 'react';
import { StatusBar, StyleSheet } from 'react-native';

export class SettingsScreen extends Component {
  public render() {
    return (
      <Container style={styles.content}>
        <StatusBar barStyle="light-content" animated />
        <Content padder>
          <Header hasTabs searchBar transparent>
            <Text>SETTINGS</Text>
          </Header>
          <Tabs>
            <Tab heading="General">
              {/* <View style={styles.header}>
                <Text style={styles.headerText}>SETTINGS</Text>
              </View> */}
              <View>
                <List>
                  <ListItem icon>
                    <Left>
                      <Icon active type="Entypo" name="language" fontSize={8} />
                    </Left>
                    <Body>
                      <Text>Language</Text>
                    </Body>
                    <Right>
                      <Text>EN</Text>
                    </Right>
                  </ListItem>
                  <ListItem itemDivider />
                  <ListItem icon>
                    <Left>
                      <Icon active name="time" />
                    </Left>
                    <Body>
                      <Text>Date format</Text>
                    </Body>
                    <Right>
                      <Text numberOfLines={1}>YYYY/MM/DD</Text>
                    </Right>
                  </ListItem>
                  <ListItem icon>
                    <Left>
                      <Icon active name="time" />
                    </Left>
                    <Body>
                      <Text>Time format</Text>
                    </Body>
                    <Right>
                      <Text>24/12</Text>
                    </Right>
                  </ListItem>
                  <ListItem icon>
                    <Left>
                      <Icon active name="calendar" />
                    </Left>
                    <Body>
                      <Text>Week starting</Text>
                    </Body>
                    <Right>
                      <Text>Monday</Text>
                    </Right>
                  </ListItem>
                  <ListItem itemDivider />
                  <ListItem icon>
                    <Left>
                      <Icon active name="book" />
                    </Left>
                    <Body>
                      <Text>Help</Text>
                    </Body>
                    <Right>
                      <Icon active name="arrow-forward" />
                    </Right>
                  </ListItem>
                </List>
              </View>
            </Tab>
            <Tab heading="Tab2">
              <View />
            </Tab>
            <Tab heading="Tab3">
              <View />
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#FEFEFE'
  },
  header: {
    // flex: 1,
    // flexDirection: 'row',
    // alignItems: 'stretch',
    // justifyContent: 'space-between',
    // paddingTop: 40,
    // paddingLeft: 20,
    // paddingRight: 20
  },
  headerText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.6)'
  }
});

export default SettingsScreen;
