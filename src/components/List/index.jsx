/**
 * Created by Administrator on 2017/9/9 0009.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './index.less';
import Item from './item/index.jsx';

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        const data = this.props.data;
        console.log('----components/List/index.jsx-----');
        console.log(data);
        return (
            <div>
                {
                    data.map((item, index)=> {
                        return (
                            <Item key={index} data={item}/>
                        )
                    })
                }
            </div>
        );
    }
}

export default Index;