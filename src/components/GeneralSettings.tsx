import { Body, Icon, Left, List, ListItem, Right, Text, View, Picker } from 'native-base';
import React, { Component } from 'react';
import { connect } from 'react-redux';

export class GeneralSettings extends Component<any> {
  public render() {
    return (
      <View>
        <List>
          <ListItem icon>
            <Left>
              <Icon active type="Entypo" name="language" style={{ fontSize: 18 }} />
            </Left>
            <Body>
              <Text>Language</Text>
            </Body>
            <Right>
              <Picker mode="dropdown" note onValueChange={this.props.changeLanguage} selectedValue="en">
                <Picker.Item value="en" label="EN" />
                <Picker.Item value="ru" label="RU" />
              </Picker>
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
              <Text>Customization</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
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
    );
  }
}

export default connect(
  (state) => state,
  (dispatch) => ({
    changeLanguage: (language) => {
      dispatch({ type: 'LANGUAGE_CHANGE', payload: language });
    }
  })
)(GeneralSettings);
