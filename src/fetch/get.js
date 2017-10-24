/**
 * Created by Administrator on 2017/9/8 0008.
 */

import 'whatwg-fetch'
import 'es6-promise'

export function get(url) {
    var result = fetch(url, {
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    });
    console.log(result);
    return result;
}

