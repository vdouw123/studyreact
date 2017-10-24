/**
 * Created by Administrator on 2017/9/9 0009.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

import {getSearchData} from '../../../fetch/search/index.js';
import ListComponent from '../../../components/List/index.jsx';
import LoadMore from '../../../components/LoadMore/index.jsx';

const initialState = {
    data: [],               // 列表信息
    hasMore: false,         // 当前状态下，是否还有更多的数据
    isLoadingMore: false,   // 当前状态下，是加载中，还是点击加载更多
    page: 0                 // 下一页的页码，首屏页码为0
};

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = initialState;
    }

    render() {
        return (
            <div>
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
            </div>
        );
    }

    componentDidMount() {
        this.loadeFirstPageData();
    }

    // 获取首屏数据
    loadeFirstPageData() {
        const cityName = this.props.userinfo.cityName;
        const keyword = this.props.keyword || '';
        const category = this.props.category;
        console.log('cityName:' + cityName + 'keyword:' + keyword + 'category:' + category);
        // const result = getListData(cityName, 0);
        const result = getSearchData(0, cityName, keyword, category);
        console.log(result);
        //this.resultHandle(result);
    }

    // 加载更多数据
    loadMoreData() {
        // 记录状态
        this.setState({isLoadingMore: true});
        const cityName = this.props.userinfo.cityName;
        const page = this.state.page;
        const keyword = this.props.keyword || '';
        const category = this.props.category;
        console.log('cityName:' + cityName + 'keyword:' + keyword + 'category:' + category);
        // const result = getListData(cityName, 0);
        const result = getSearchData(page, cityName, keyword, category);
        //this.resultHandle(result);
        this.setState({
            page: page + 1,
            isLoadingMore: false
        });
    }

    // 数据处理
    resultHandle(result) {
        result.then((res)=> {
            console.log('---Search/subpage/List.jsx-------');
            console.log(res);
            return res.json();
        }).then((json)=> {
            console.log('---Search/subpage/List.jsx-------');
            console.log(json);
            this.setState({
                data: this.state.data.concat(json.data),
                hasMore: json.hasMore
            });
        })
    }
}

function mapStateToProps(state) {
    return {userinfo: state.userinfo};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);