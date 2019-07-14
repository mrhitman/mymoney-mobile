import { Body, Icon, Left, List, ListItem, Right, Text, View, Picker } from 'native-base';
import React, { Component } from 'react';
<<<<<<< HEAD
import { Languages } from '../store/reducers/account';
import { connect } from 'react-redux';

export class GeneralSettings extends Component<any> {
	public render() {
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
						<Right>
							<Picker onValueChange={this.handleChangeLanguage}>
								<Picker.Item label="RU" value={Languages.ru} />
								<Picker.Item label="EN" value={Languages.en} />
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

	protected handleChangeLangualge = (value: Languages) => {
		this.props.changeLanguage(value);
	};
}

export default connect(
	(state) => ({
		...state
	}),
	(dispatch) => ({
		changeLanguage: (language: Languages) => {
			dispatch({ action: 'LANGUAGE_CHANGE', payload: language });
		}
	})
=======
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
>>>>>>> 195900c5fb15cfe1befdcd4da6fa550ffd996f53
)(GeneralSettings);
