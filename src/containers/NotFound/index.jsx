/**
 * Created by Administrator on 2017/9/5 0005.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <h1>404 Not Found Page</h1>
        );
    }
}

export default Index;