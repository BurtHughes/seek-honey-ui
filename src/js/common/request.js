import "whatwg-fetch";
import React from "react";
import { connect } from "react-redux";
import { error_toast, hide_toast } from "../model/actions";
//import { store } from "../../index";
import { toast } from "./toast";

// Restfult风格请求
let baseUrl = "http://127.0.0.1/";
let isPrd = true; //false-测试 true-生产

//let { showToast, hideToast } = toast(store.dispatch);
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ...toast(dispatch)
  };
};

class Request {
  
}

Request.prototype.do = ({ path, method, param }) => {
  //let { path, method, param } = this.state;
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
    fetch(path, p)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          let msg = "请求失败:" + res.msg;
          this.props.showToast("error", msg);
          console.error(msg);
          reject({ status: res.status });
        }
      })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        let msg = "请求出错:" + err;
        this.props.showToast("error", msg);
        console.error(msg);
        reject({ status: -1 });
      });
  };

  return new Promise(promise);
};

export default (Request = connect(
  null,
  mapDispatchToProps
)(Request));

export let GET = obj => {
  return Request.do({
    ...obj,
    method: "get"
  });
};

export let POST = obj => {
  return Request({
    ...obj,
    method: isPrd ? "post" : "get"
  }).do();
};

export let PUT = obj => {
  return Request.do({
    ...obj,
    method: isPrd ? "put" : "get"
  });
};

export let DELETE = obj => {
  return Request({
    ...obj,
    method: isPrd ? "delete" : "get"
  }).do();
};
