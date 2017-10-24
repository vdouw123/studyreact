/**
 * Created by Administrator on 2017/9/6 0006.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userinfoActionsFromOtherFile from '../actions/index.jsx';

import Util from '../util/index.jsx';
import {CITYNAME} from '../config/index.jsx';

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {initDone: false};
    }

    // 在render完成且组件装载完成后调用（比如AJAX请求等）
    componentDidMount() {
        // 从localStorage中获取城市
        let cityName = Util.getLocalStorage(CITYNAME);
        if (cityName == null) cityName = '北京';
        console.log(cityName);
        // 将城市信息存储到Redux中
        this.props.userinfoActions.update({
            cityName: cityName
        });
        setTimeout(()=> {
            this.setState({initDone: true});
            // Util.setLocalStorage(CITYNAME, cityName);
        }, 1000);
    }

    render() {
        return (
            <div>
                <div>Header</div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/detail/1">detail/1</Link></li>
                    <li><Link to="/detail/2">detail/2</Link></li>
                    <li><Link to="/detail/3">detail/3</Link></li>
                    <li><Link to="/city">City</Link></li>
                    <li><Link to="/notFound">NotFound</Link></li>
                </ul>
                {
                    this.state.initDone ?
                        this.props.children :
                        <div>正在加载...</div>
                }
                <div>Footer</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        userinfoActions: bindActionCreators(userinfoActionsFromOtherFile, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);

