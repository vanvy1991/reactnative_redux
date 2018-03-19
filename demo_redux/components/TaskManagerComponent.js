import React, {Component} from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View,
        Image, Alert, TouchableHighlight, RefreshControl,Platform,
         TextInput} from 'react-native';
import AddContainer from '../containers/AddContainer';
import TaskListContainer from '../containers/TaskListContainer';

export default class TaskManagerComponent extends Component{
    render(){
        return(
            <View style={{flex: 1, marginTop: Platform.OS==='ios' ? 34 : 0}}>
                <AddContainer />
                <TaskListContainer />
            </View>
        );
    }
}