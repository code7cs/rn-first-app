import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
	// const [ outputText, setOutputText ] = useState('Open up App.js to start working on your app!');
	const [ enteredGoal, setEnteredGoal ] = useState('');
	const [ courseGoals, setCourseGoals ] = useState([]);

	const goalInputHandler = (enteredText) => {
		setEnteredGoal(enteredText);
	};

	const addGoalHandler = () => {
		setCourseGoals((currentCourse) => {
			return [ ...currentCourse, { key: Math.random().toString(), val: enteredGoal } ];
		});
	};

	return (
		<View style={styles.root}>
			{/* <Text>{outputText}</Text> */}
			{/* <StatusBar style="auto" /> */}
			{/* <Button title="Change Text" onPress={() => setOutputText('Changed Text!!')} /> */}
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Type something"
					style={styles.input}
					onChangeText={goalInputHandler}
					value={enteredGoal}
				/>
				<Button title="ADD" onPress={addGoalHandler} />
			</View>
			<FlatList
				data={courseGoals}
				renderItem={(itemData) => {
					return (
						<View style={styles.listItem}>
							<Text>{itemData.item.val}</Text>
						</View>
					);
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	root: {
		padding: 50
	},
	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	input: {
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		width: '80%'
	},
	listItem: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: '#ccc',
		borderColor: 'black',
		borderWidth: 1
	}
});
