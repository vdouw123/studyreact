/**
 * Created by Administrator on 2017/9/8 0008.
 */

import {get} from '../get.js';

export function getAdData() {
    const result = get('/api/homead');
    console.log('-------fetch/home/index.js {getAdData}--------');
    console.log(result);
    return result;
}

export function getListData(city, page) {
    const result = get('/api/homelist/' + encodeURIComponent(city) + '/' + page);
    console.log('-------fetch/home/index.js {getListData}--------');
    console.log(result);
    return result;
}