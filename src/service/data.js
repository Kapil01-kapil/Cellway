import React, {Component} from 'react';
import axios from 'axios';

const baseUrl = 'https://cellway.in/mobileapp/index.php';
class DataService {
  constructor() {}

  getApiCall() {
    return axios.get(baseUrl + url);
  }
  postApiCall(url, d) {
    return axios.post(baseUrl + url, d);
  }
  

  handleError(e) {
    console.log(error);
  }
}
export default DataService;
