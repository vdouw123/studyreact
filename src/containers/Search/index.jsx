/**
 * Created by Administrator on 2017/9/6 0006.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import SearchHeader from '../../components/SearchHeader/index.jsx';
import SearchList from './subpage/List.jsx';

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        const params = this.props.params;
        return (
            <div>
                <SearchHeader keyword={params.keyword}/>
                <SearchList key={params.keyword} category={params.category}/>
                <h1>Search - {this.props.params.category} - {this.props.params.keyword}</h1>
            </div>
        );
    }

    componentDidMount() {
        console.log(this.props.params.category + '|' + this.props.params.keyword);
    }
}

export default Index;

