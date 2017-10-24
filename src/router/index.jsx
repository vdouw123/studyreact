/**
 * Created by Administrator on 2017/9/5 0005.
 */

import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import App from '../containers/index.jsx';
import Home from '../containers/Home/index.jsx';
import City from '../containers/City/index.jsx';
import User from '../containers/User/index.jsx';
import Search from '../containers/Search/index.jsx';
import Detail from '../containers/Detail/index.jsx';
import NotFound from '../containers/NotFound/index.jsx';

class Index extends React.Component {
    updateHandle() {
        console.log('每次路由变化触发');
    }

    render() {
        return (
            <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='city' component={City}/>
                    <Route path='user' component={User}/>
                    <Route path='search/:category(/:keyword)' component={Search}/>
                    <Route path='detail/:id' component={Detail}/>
                    <Route path="*" component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default Index;
