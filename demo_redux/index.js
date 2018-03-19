import { AppRegistry } from 'react-native';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers';
import TaskManagerComponent from './components/TaskManagerComponent';
import React, {Component} from 'react';

let store =createStore(allReducers);
const App = () => (
    <Provider store={store}>
        <TaskManagerComponent />
    </Provider>
);
AppRegistry.registerComponent('demo_redux', () => App);
