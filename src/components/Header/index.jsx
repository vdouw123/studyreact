/**
 * Created by Administrator on 2017/9/13 0013.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './index.less';

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div id="common-header">
                <span className="back-icon" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-chevron-left"/>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        );
    }

    clickHandle() {
        window.history.back();
    }
}

export default Index;