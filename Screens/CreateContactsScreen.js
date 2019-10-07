import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
	Keyboard,
	AsyncStorage,
	Alert,
	TouchableWithoutFeedback,
	ScrollView
} from 'react-native';

import { Form, Label, Button, Input, Item } from 'native-base';

export default class CreateContactsScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fname: '',
			lname: '',
			phone: '',
			email: '',
			address: ''
		};
	}
	static navigationOptions = {
		title: 'Add Contact'
	};

	saveContact = async () => {
		if (
			this.state.fname !== '' &&
			this.state.lname !== '' &&
			this.state.phone !== '' &&
			this.state.email !== '' &&
			this.state.address !== ''
		) {
			let contact = {
				fname: this.state.fname,
				lname: this.state.lname,
				phone: this.state.phone,
				email: this.state.email,
				address: this.state.address
			};
			await AsyncStorage.setItem(Date.now().toString(), JSON.stringify(contact))
				.then(() => this.props.navigation.goBack())
				.catch((err) => {
					console.log(err);
				});
		} else {
			Alert.alert('All fields are required');
		}
	};

	render() {
		return (
			<View>
				<Text> CreateContactsScreen </Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
