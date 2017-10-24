/**
 * Created by sf on 2017/6/29.
 */

import React from 'react';
import {render} from 'react-dom';
import {hashHistory} from 'react-router';
import {Provider} from 'react-redux';

import configureStore from './store/index.jsx';
import RouteMap from './router/index.jsx';

import './static/css/common.less';
import './static/css/font.css';

// 创建Redux的store对象
const store = configureStore();

render(
    <Provider store={store}>
        <RouteMap history={hashHistory}/>
    </Provider>,
    document.getElementById('root')
);
