/**
 * Created by Administrator on 2017/9/6 0006.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';

import {CITYNAME} from '../../config/index.jsx';
import Util from '../../util/index.jsx';
import * as userInfoActionsFromOtherFile from '../../actions/index.jsx';

import Header from '../../components/Header/index.jsx';
import CurrentCity from '../../components/CurrentCity/index.jsx';
import CityList from '../../components/CityList/index.jsx';

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                <Header title="选择城市"/>
                <CurrentCity cityName={this.props.userinfo.cityName}/>
                <CityList changeFn={this.changeCity.bind(this)}/>
            </div>
        );
    }

    changeCity(newCity) {
        if (newCity == null) return false;
        // 修改redux
        const userinfo = this.props.userinfo;
        userinfo.cityName = newCity;
        this.props.userinfoActions.update(userinfo);
        // 修改localStorage
        Util.setLocalStorage(CITYNAME, newCity);
        hashHistory.push('/city');
    }

    componentDidMount() {
        console.log('----containers/City/index.jsx------');
        console.log(this.props.userinfo);
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    };
}

function mapDispatchToProps(dispatch) {
    return {
        userinfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);

