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

	saveContact = () => {
		if (
			this.state.fname !== '' &&
			this.state.lname !== '' &&
			this.state.phone !== '' &&
			this.state.email !== '' &&
			this.state.address !== ''
		) {
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
