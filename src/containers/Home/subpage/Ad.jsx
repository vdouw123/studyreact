/**
 * Created by Administrator on 2017/9/8 0008.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import HomeAd from '../../../components/HomeAd/index.jsx';
import {getAdData} from '../../../fetch/home/index.js';

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {data: []};
    }

    render() {
        return (
            <div>
                {
                    this.state.data.length
                        ? <HomeAd data={this.state.data}/>
                        : <div>加载中...</div>
                }
            </div>
        );
    }

    componentDidMount() {
        const result = getAdData();
        console.log('-------Ad.jsx-------');
        result.then((res)=> {
            console.log(res);
            return res.json();
        }).then((data)=> {
            console.log(data);
            if (data.length) this.setState({data: data})
        })
    }
}

export default Index;