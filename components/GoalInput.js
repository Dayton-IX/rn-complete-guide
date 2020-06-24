import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = (props) => {
	const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = enteredText => {
		setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }
    
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="Course Goal" 
                    style={styles.input} 
                    onChangeText={goalInputHandler}
                />
                <View style={styles.buttonsContainer}>
                    <Button title="CANCEL" color="red" onPress={props.onCancel} />  
                    <Button title="ADD" onPress={addGoalHandler} />
                </View>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
		justifyContent: 'center', 
		alignItems: 'center'
	},
	input: {
		width: '80%', 
		borderColor: 'black', 
		borderWidth: 1, 
        padding: 10,
        marginBottom: 10
    },
    buttonsContainer: {
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default GoalInput;