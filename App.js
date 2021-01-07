import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { Constants } from 'expo-constants';

// var styles = {};
export default function App() {
	// const [ outputText, setOutputText ] = useState('Open up App.js to start working on your app!');
	// const [ enteredGoal, setEnteredGoal ] = useState('');
	// const [ courseGoals, setCourseGoals ] = useState([]);

	// const goalInputHandler = (enteredText) => {
	// 	setEnteredGoal(enteredText);
	// };

	// const addGoalHandler = () => {
	// 	setCourseGoals((currentCourse) => {
	// 		return [ ...currentCourse, { key: Math.random().toString(), val: enteredGoal } ];
	// 	});
	// };

	return (
		<View style={styles.container}>
			<View style={[styles.layout, styles.rowStretch]}>
				<Text>First statement with row</Text>
			</View>
			<View style={[styles.layout, styles.columnStretch]}>
				<Text>Second statement with column</Text>
			</View>
			{/* <FlatList data={fetchData} renderItem={fun} /> */}
		</View>
		// <View style={styles.root}>
		// 	{/* <Text>{outputText}</Text> */}
		// 	{/* <StatusBar style="auto" /> */}
		// 	{/* <Button title="Change Text" onPress={() => setOutputText('Changed Text!!')} /> */}
		// 	<View style={styles.inputContainer}>
		// 		<TextInput
		// 			placeholder="Type something"
		// 			style={styles.input}
		// 			onChangeText={goalInputHandler}
		// 			value={enteredGoal}
		// 		/>
		// 		<Button title="ADD" onPress={addGoalHandler} />
		// 	</View>
		// 	<FlatList
		// 		data={courseGoals}
		// 		renderItem={(itemData) => {
		// 			return (
		// 				<View style={[styles.listItem, {borderColor: 'red'}]}>
		// 					<Text>{itemData.item.val}</Text>
		// 				</View>
		// 			);
		// 		}}
		// 	/>
		// </View>
	);
}

// var fetchData = () => {
// 	return ['a', 'b']
// }
// const fun = ({item})=> {
// 	return <Text style={styles.item}>{item}</Text>
// }
const styles = StyleSheet.create({
	container: {
		paddingTop: 20,
		flex: 1,
		// paddingTop: 22,
		flexDirection: 'row',
		// backgroundColor: '#fff',
		// alignItems: 'center',
		// justifyContent: 'center'
	},
	item: {
		padding:10,
		height:44,
		fontSize: 18
	},
	layout: {
		flex: 1,
		padding: 15,
		marginBottom: 5,
		backgroundColor: 'red',
		flexDirection: 'row'
	},
	rowStretch: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'stretch'
	},
	columnStretch: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'stretch'
	},
});
