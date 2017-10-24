/**
 * Created by Administrator on 2017/9/9 0009.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import {getListData} from '../../../fetch/home/index.js';
import ListComponent from '../../../components/List/index.jsx';
import LoadMore from '../../../components/LoadMore/index.jsx';

import './index.less';

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],               // 列表信息
            hasMore: false,         // 当前状态下，是否还有更多的数据
            isLoadingMore: false,   // 当前状态下，是加载中，还是点击加载更多
            page: 1                 // 下一页的页码，首屏页码为0
        };
    }

    render() {
        return (
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
                {
                    this.state.data.length
                        ? <ListComponent data={this.state.data}/>
                        : <div>加载中...</div>
                }
                {
                    this.state.hasMore
                        ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                        : ''
                }
                <p>
                    {
                        this.state.hasMore.toString()
                            ? 'this.state.hasMore: hasMore'
                            : 'this.state.hasMore: noMore'
                    }
                </p>
                <p>this.state.data.length: {this.state.data.length}</p>
            </div>
        );
    }

    componentDidMount() {
        this.loadeFirstPageData();
    }

    // 获取首屏数据
    loadeFirstPageData() {
        const cityName = this.props.cityName;
        const result = getListData(cityName, 0);
        console.log(result);
        this.resultHandle(result);
    }

    // 加载更多数据
    loadMoreData() {
        // 记录状态
        this.setState({isLoadingMore: true});
        const cityName = this.props.cityName;
        const page = this.state.page;
        const result = getListData(cityName, page);
        this.resultHandle(result);
        this.setState({
            page: page + 1,
            isLoadingMore: false
        });
    }

    // 数据处理
    resultHandle(result) {
        result.then((res)=> {
            console.log('-----猜你喜欢-----');
            console.log(res);
            return res.json();
        }).then((json)=> {
            console.log(json);
            this.setState({
                data: this.state.data.concat(json.data),
                hasMore: json.hasMore
            });
        })
    }
}

export default Index;