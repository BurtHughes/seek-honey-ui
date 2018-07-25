import 'whatwg-fetch';
// Restfult风格请求
let baseUrl = 'http://127.0.0.1/';
let req = obj => {
    let path = '';
    if (typeof obj.path === 'string') {
        if (obj.path.indexOf('http') === 0) {
            path = obj.path;
        } else {
            path = baseUrl + obj.path;
        }
    } else {
        return;
    }
    fetch(path, { method: obj.method })
        .catch((err) => {
            console.error('请求出错:' + err);
        });
};

export let GET = obj => {
    req({ ...obj, method: 'get' });
};
export let POST = obj => {
    req({ ...obj, method: 'post' });
};
export let PUT = obj => {
    req({ ...obj, method: 'put' });
};
export let DELETE = obj => {
    req({ ...obj, method: 'delete' });
};