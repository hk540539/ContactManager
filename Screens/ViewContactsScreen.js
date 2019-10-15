import React, { Component } from 'react';
import { Text, View, StyleSheet, AsyncStorage, ScrollView, Linking, Platform } from 'react-native';
import { Card, CardItem } from 'native-base';
import { Entypo } from '@expo/vector-icons';

export default class ViewContactsScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fname: 'dummy',
			lname: 'dummy',
			phone: 'dummy',
			email: 'dummy',
			address: 'dummy',
			key: 'dummy'
		};
	}
	static navigationOptions = {
		title: 'View Contact'
	};

	componentDidMount() {
		const { navigation } = this.props;
		navigation.addListener('willFocus', () => {
			var key = this.props.navigation.getParam('key', '');
			this.getContact(key);
		});
	}

	getContact = async (key) => {
		await AsyncStorage.getItem(key)
			.then((contactjsonString) => {
				var contact = JSON.parse(contactjsonString);
				contact['key'] = key;
				this.setState(contact);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	callAction = (phone) => {
		let phoneNumber = phone;
		if (Platform.OS !== 'android') {
			phoneNumber = `telpromt:${phone}`;
		} else {
			phoneNumber = `tel:${phone}`;
		}
		Linking.canOpenURL(phoneNumber)
			.then((supported) => {
				if (!supported) {
					Alert.alert('Phone number is not available');
				} else {
					return Linking.openURL(phoneNumber);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	smsAction = (phone) => {
		let phoneNumber = phone;
		phoneNumber = `sms:${phone}`;
		Linking.canOpenURL(phoneNumber)
			.then((supported) => {
				if (!supported) {
					Alert.alert('Phone number is not available');
				} else {
					return Linking.openURL(phoneNumber);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	render() {
		return (
			<View>
				<Text> ViewContactsScreen </Text>
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
