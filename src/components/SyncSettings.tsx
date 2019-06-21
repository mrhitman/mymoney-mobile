import { Body, Icon, Left, List, ListItem, Text, View } from 'native-base';
import React, { Component } from 'react';

export class SyncSettings extends Component {
  render() {
    return (
      <View>
        <List>
          <ListItem icon>
            <Left>
              <Icon active type="Entypo" name="language" fontSize={8} />
            </Left>
            <Body>
              <Text>Language</Text>
            </Body>
          </ListItem>
        </List>
      </View>
    );
  }
}

export default SyncSettings;
