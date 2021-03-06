import { Container, Content, Icon, List, ListItem, Picker, Text, View } from 'native-base';
import React, { Component } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import i18n from '../i18n/i18n';
import { getCategoriesByType } from '../store/selectors/categories';
import ICategory from '../types/Category';
import Store from '../types/Store';

interface CategoriesScreenProps {
	categories: ICategory[];
	getCategoriesByType: (type: string) => ICategory[];
}

export class CategoriesScreen extends Component<CategoriesScreenProps> {
	public state = {
		selected: 'all'
	};

	public render() {
		return (
			<Container style={styles.content}>
				<StatusBar barStyle="light-content" animated />
				<Content padder>
					<View style={styles.accountHeader}>
						<Text style={styles.accountHeaderText}>{i18n.t('yourCategories')}</Text>
						<Picker
							mode="dropdown"
							note
							style={styles.accountHeaderFilter}
							textStyle={styles.accountHeaderFilterText}
							itemTextStyle={styles.accountHeaderFilterText}
							iosIcon={<Icon name="arrow-down" />}
							selectedValue={this.state.selected}
							onValueChange={this.handleChangeFilter}
						>
							<Picker.Item label={i18n.t('all').toUpperCase()} value="all" />
							<Picker.Item label={i18n.t('income').toUpperCase()} value="income" />
							<Picker.Item label={i18n.t('outcome').toUpperCase()} value="outcome" />
						</Picker>
					</View>
					<View>
						<List>{this.props.getCategoriesByType(this.state.selected).map(this.renderCategory)}</List>
					</View>
				</Content>
			</Container>
		);
	}

	protected renderCategory = (category: ICategory) => {
		return (
			<ListItem key={category.id}>
				<Text>{i18n.t(category.name)}</Text>
			</ListItem>
		);
	};

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

export default connect(
	(state: Store) => ({
		...state,
		getCategoriesByType: (type: string) => (type === 'all' ? state.categories : getCategoriesByType(state, type))
	}),
	() => ({})
)(CategoriesScreen);
