/**
 * Created by Administrator on 2017/9/6 0006.
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
            <div id="home-ad">
                <h2>超值特惠</h2>
                <div className="ad-container clear-fix">
                    {
                        this.props.data.map((item, index)=> {
                            return (
                                <div key={index} className="ad-item float-left">
                                    <a href={item.link}><img src={item.img} title={item.title}/></a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Index;