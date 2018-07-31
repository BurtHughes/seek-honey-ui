import 'whatwg-fetch';
// Restfult风格请求
let baseUrl = 'http://127.0.0.1/';
let isPrd = true;//false-测试 true-生产

let req = (obj) => {
    let path = '';
    if (typeof obj.path === 'string') {
        if (obj.path.indexOf('http') === 0) {
            path = obj.path;
        } else {
            path = baseUrl + obj.path;
        }
    } else {
        return '请求路径错误';
    }

    let promise = (resolve, reject) => {
        fetch(path, {
            method: obj.method,
            body: JSON.stringify(obj.param)
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    console.error('请求失败:' + res);
                    reject({ status: res.status });
                }
            })
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                console.error('请求出错:' + err);
                reject({ status: -1 });
            });
    };

    return new Promise(promise);
};

export let GET = (obj) => {
    return req({ ...obj, method: 'get' });
};
export let POST = (obj) => {
    return req({ ...obj, method: isPrd ? 'post' : 'get' });
};
export let PUT = (obj) => {
    return req({ ...obj, method: isPrd ? 'put' : 'get' });
};
export let DELETE = (obj) => {
    return req({ ...obj, method: isPrd ? 'delete' : 'get' });
};