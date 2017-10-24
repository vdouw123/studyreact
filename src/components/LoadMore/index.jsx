/**
 * Created by Administrator on 2017/9/11 0011.
 */

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.less'

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className="load-more" ref="wrapper">
                {
                    this.props.isLoadingMore
                        ? <span>加载中...</span>
                        : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
                }
            </div>
        );
    }

    loadMoreHandle() {
        this.props.loadMoreFn();
    }

    componentDidMount() {
        // 使用滚动时自动加载更多
        const loadMoreFn = this.props.loadMoreFn;
        const wrapper = this.refs.wrapper;
        let timeoutId;

        function callback() {
            const top = wrapper.getBoundingClientRect().top;
            console.log(top);
            const windowHeight = window.screen.height;
            if (top && top < windowHeight) {
                // 证明wrapper已经被滚动到暴露在页面可视范围之内了
                loadMoreFn();
            }
        }

        window.addEventListener('scroll', function () {
            if (this.props.isLoadingMore) return false;
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(callback, 50)
        }.bind(this), false);
    }
}

export default Index;