import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, AsyncStorage } from 'react-native';

import { Card } from 'native-base';
import { Entypo } from '@expo/vector-icons';

export default class HomeScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Data: []
		};
	}
	static navigationOptions = {
		title: 'Contact App'
	};

	componentWillMount() {
		const { navigation } = this.props;
		navigation.addListener('willFocus', () => {
			this.getAllContacts();
		});
	}
	//TODO: get all contacts

	getAllContacts = async () => {
		await AsyncStorage.getAllKeys()
			.then((keys) => {
				return AsyncStorage.multiGet(keys)
					.then((result) => {
						this.setState({
							Data: result.sort(function(a, b) {
								if (JSON.parse(a[1]).fname < JSON.parse(b[1]).fname) {
									return -1;
								}
								if (JSON.parse(a[1]).fname > JSON.parse(b[1]).fname) {
									return 1;
								}
								return 0;
							})
						});
					})
					.catch((err) => {
						console.log('multitouch', err);
					});
			})
			.catch((err) => console.log('Get all keys ', err));
		console.log(this.state.Data);
	};

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.floatButton}
					onPress={() => {
						this.props.navigation.navigate('Create');
					}}
				>
					<Entypo name="plus" size={30} color="#fff" />
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	listItem: {
		flexDirection: 'row',
		padding: 20
	},
	iconContainer: {
		width: 50,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#B83227',
		borderRadius: 100
	},
	contactIcon: {
		fontSize: 28,
		color: '#fff'
	},
	infoContainer: {
		flexDirection: 'column'
	},
	infoText: {
		fontSize: 16,
		fontWeight: '400',
		paddingLeft: 10,
		paddingTop: 2
	},
	floatButton: {
		borderWidth: 1,
		borderColor: 'rgba(0,0,0,0.2)',
		alignItems: 'center',
		justifyContent: 'center',
		width: 60,
		position: 'absolute',
		bottom: 10,
		right: 10,
		height: 60,
		backgroundColor: '#B83227',
		borderRadius: 100
	}
});
