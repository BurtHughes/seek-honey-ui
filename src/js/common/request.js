import "whatwg-fetch";
import { store } from "../../index";
import { toast } from "./toast";

// Restfult风格请求
let baseUrl = "http://127.0.0.1/";
let isPrd = true; //false-测试 true-生产

let request = ({ path, method, param }) => {
  if (typeof path === "string") {
    if (path.indexOf("http") !== 0) {
      path = baseUrl + path;
    }
  } else {
    return "请求路径错误";
  }

  let promise = (resolve, reject) => {
    let p = { method };
    isPrd && (p["body"] = JSON.stringify(param));
    const { showToast, hideToast } = toast(store.dispatch);
    fetch(path, p)
      .then(res => {
        hideToast();
        if (res.ok) {
          return res.json();
        } else {
          let msg = "请求失败:" + res.msg;
          showToast("error", msg);
          console.error(msg);
          reject({ status: res.status });
        }
      })
      .then(res => {
        if (res.code !== 0) {
          showToast("error", res.msg || "失败");
        }
        resolve(res);
      })
      .catch(err => {
        hideToast();
        let msg = "请求出错:" + err;
        showToast("error", msg);
        console.error(msg);
        reject({ status: -1 });
      });
  };

  return new Promise(promise);
};

export let GET = obj => {
  return request({
    ...obj,
    method: "get"
  });
};

export let POST = obj => {
  return request({
    ...obj,
    method: isPrd ? "post" : "get"
  });
};

export let PUT = obj => {
  return request({
    ...obj,
    method: isPrd ? "put" : "get"
  });
};

export let DELETE = obj => {
  return request({
    ...obj,
    method: isPrd ? "delete" : "get"
  });
};
