import 'whatwg-fetch';
// Restfult风格请求
let baseUrl = 'http://127.0.0.1/';
let req = obj => {
    fetch(baseUrl + obj.path,{
        method: obj.method
    })
    .catch((err)=>{
        console.log('fetch出错:' + err);
    });
};

export let GET = obj => {
    req({...obj, method:'get'});
};
export let POST = obj => {
    req({...obj, method:'post'});
};
export let PUT = obj => {
    req({...obj, method:'put'});
};
export let DELETE = obj => {
    req({...obj, method:'delete'});
};