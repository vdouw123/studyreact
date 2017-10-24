/**
 * Created by Administrator on 2017/9/15 0015.
 */

import {get} from '../get.js';

export function getSearchData(page, cityName, category, keyword) {
    const keywordStr = keyword ? '/' + keyword : '';
    const result = get('/api/search/' + page + '/' + cityName + '/' + category + keywordStr);
    return result;
}
