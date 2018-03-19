import React, {Component} from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View,
        Image, Alert, TouchableHighlight, RefreshControl,
         TextInput} from 'react-native';
import {addNewTask} from '../actions';

const styles = StyleSheet.create({
    view_container: {
        backgroundColor: 'tomato',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 64
    },
    text_input: {
        height: 40,
        width: 200,
        margin: 10,
        padding: 10,
        borderColor: 'white',
        borderWidth: 1,
        color: 'white'
    }
});
export default class AddComponent extends Component{
    constructor(props){
        super(props);
        this.state = ({
            newTaskName: ''
        });
    }

    render() {
        return(
            <View style={styles.view_container}>
                <TextInput style={styles.text_input}
                placeholder='Enter task name'
                onChangeText={
                    (text) => {
                        this.setState({newTaskName: text})
                    }
                } />
                <TouchableHighlight
                    style={{
                        marginRight: 10
                    }}
                    underlayColor='blue'
                    onPress={(event) =>{
                        if(!this.state.newTaskName.trim()){
                            return;
                        }
                        //Call click event => user 'Container';
                        this.props.onClickAdd(this.state.newTaskName);
                        
                    }}>
                    <Image style={{width: 35, height: 35}}
                    source={{uri: 'https://png.icons8.com/ios/1600/add.png'}} />
                </TouchableHighlight>
            </View>
        );
    }
}

