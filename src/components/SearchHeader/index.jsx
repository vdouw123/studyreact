/**
 * Created by Administrator on 2017/9/15 0015.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {hashHistory} from 'react-router';

import SearchInput from '../SearchInput/index.jsx';

import './index.less';

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div id="search-header" className="clear-fix">
                <span className="back-icon float-left" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-chevron-left"/>
                </span>
                <div className="input-container">
                    <i className="icon-search"/>
                    <SearchInput value={this.props.keyword||''} enterHandle={this.enterHandle.bind(this)}/>
                </div>
            </div>
        )
    }

    clickHandle() {
        window.history.back();
    }

    enterHandle(value) {
        hashHistory.push('/search/all/' + encodeURIComponent(value));
    }
}

export default Index;