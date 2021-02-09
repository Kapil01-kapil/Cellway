import React, {Component} from 'react';
import axios from 'axios';
import DataService from './data';

class AuthService extends DataService {
  constructor() {
    super();
  }

  login(url, mobile, password) {
    let body = new FormData();
    body.append('mobile', mobile);
    body.append('password', password);
    body.append('key', '5642vcb546gfnbvb7r6ewc211365vhh34');
    return this.postApiCall(url, body);
  }
  SignIn(url, mobile, password, email, image) {
    let body = new FormData();
    body.append('mobile', mobile);
    body.append('password', password);
    body.append('email', email);
    body.append('image', image);
    body.append('key', '5642vcb546gfnbvb7r6ewc211365vhh34');
    return this.postApiCall(url, body);
  }
  Home(url) {
    let body = new FormData();
    body.append('key', '5642vcb546gfnbvb7r6ewc211365vhh34');
    return this.postApiCall(url, body);
  }
  Profile(url, userid, mobile, email, image, name) {
    let body = new FormData();
    body.append('mobile', mobile);
    body.append('email', email);
    body.append('image', image);
    body.append('name', name);
    body.append('userid', '55685');
    body.append('key', '5642vcb546gfnbvb7r6ewc211365vhh34');
    return this.postApiCall(url, body);
  }
  CustomSidebarMenu(url, userid, mobile, email, image, name) {
    let body = new FormData();
    body.append('userid', '55685');
    body.append('key', '5642vcb546gfnbvb7r6ewc211365vhh34');
    return this.postApiCall(url, body);
  }
  Contac(url) {
    let body = new FormData();

    body.append('key', '5642vcb546gfnbvb7r6ewc211365vhh34');
    return this.postApiCall(url, body);
  }
  Destination(url, type) {
    let body = new FormData();
    body.append('type', '1,2,3,4');
    body.append('key', '5642vcb546gfnbvb7r6ewc211365vhh34');
    return this.postApiCall(url, body);
  }
  Destination2(url, type) {
    let body = new FormData();
    body.append('type', '2');
    body.append('key', '5642vcb546gfnbvb7r6ewc211365vhh34');
    return this.postApiCall(url, body);
  }
  Destination3(url, type) {
    let body = new FormData();
    body.append('type', '3');
    body.append('key', '5642vcb546gfnbvb7r6ewc211365vhh34');
    return this.postApiCall(url, body);
  }
  Destination4(url, type) {
    let body = new FormData();
    body.append('type', '3');
    body.append('key', '5642vcb546gfnbvb7r6ewc211365vhh34');
    return this.postApiCall(url, body);
  }
}
export default AuthService;
