import { Button, Input, Item, List, ListItem, Text, View, Content } from 'native-base';
import React, { Component, Fragment } from 'react';
import { Modal, StyleSheet } from 'react-native';
import Flag from 'react-native-round-flags';
import ICurrency from '../types/Currency';

interface PocketAddModalProps {
	currencies: ICurrency[];
	onSelect: (currencyId: string) => void;
}

export class PocketAddModal extends Component<PocketAddModalProps> {
	public state = {
		search: '',
		show: false
	};

	public render() {
		const { search } = this.state;
		return (
			<Fragment>
				<View style={styles.container}>
					<Button bordered rounded transparent onPress={this.show}>
						<Text>Add pocket</Text>
					</Button>
				</View>
				<Modal visible={this.state.show} animationType="slide" onRequestClose={this.hide}>
					<View style={{ padding: 20 }}>
						<Item bordered>
							<Input onChangeText={this.handleSearch} placeholder="Search..." />
						</Item>
						<List>
							{this.props.currencies
								.filter((currency) => !search || currency.name.includes(search) || currency.short.includes(search))
								.map((currency) => (
									<ListItem key={currency.id} onPress={this.handleSelect(currency.id)}>
										<View style={styles.itemContainer}>
											<View style={styles.flag}>
												<Flag code={currency.code} style={{ width: 28, height: 28 }} />
											</View>
											<Text>
												{currency.name} ({currency.short})
											</Text>
										</View>
									</ListItem>
								))}
						</List>
					</View>
				</Modal>
			</Fragment>
		);
	}

	protected handleSearch = (value) => {
		this.setState({ search: value });
	};

	protected show = () => {
		this.setState({ show: true });
	};

	protected hide = () => {
		this.setState({ show: false, search: '' });
	};

	protected handleSelect = (currencyId: string) => () => {
		this.props.onSelect(currencyId);
		this.hide();
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		marginRight: 24,
		marginTop: 16,
		marginBottom: 16
	},
	itemContainer: {
		flex: 1,
		flexDirection: 'row'
	},
	flag: {
		marginRight: 16
	}
});

export default PocketAddModal;
