/**
 * Created by Administrator on 2017/9/4 0004.
 */

export default {
    getLocalStorage: function (key) {
        var value = '';
        try {
            value = localStorage.getItem(key)
        } catch (ex) {
            console.error('localStorage.setItem报错, ', ex.message);
        } finally {
            return value;
        }
    },
    setLocalStorage: function (key, value) {
        try {
            // ios safari无痕模式下，直接使用localStorage.setItem会报错
            localStorage.setItem(key, value)
        } catch (ex) {
            console.error('localStorage.setItem报错, ', ex.message);
        }
    }
}
