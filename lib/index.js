"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendRequestCallback = exports.sendRequestObservable = exports.sendRequest = void 0;
const rxjs_1 = require("rxjs");
const prepareData = (body, files) => {
    const formData = new FormData();
    if (body) {
        formData.append('data', JSON.stringify(body));
    }
    if (files && files.length > 0) {
        files.forEach((file) => {
            formData.append('files', file);
        });
    }
    return formData;
};
const sendRequest = (url, method, headers, body, files) => {
    const data = prepareData(body, files);
    return fetch(url, { method, headers, body: data });
};
exports.sendRequest = sendRequest;
const sendRequestObservable = (url, method, headers, body, files) => {
    const data = prepareData(body, files);
    const result = (0, rxjs_1.from)(fetch(url, { method, headers, body: data }));
    return result;
};
exports.sendRequestObservable = sendRequestObservable;
const sendRequestCallback = (url, method, headers, body, files, cb) => {
    const data = prepareData(body, files);
    fetch(url, { method, headers, body: data })
        .then(res => {
        if (cb) {
            cb(res);
        }
    })
        .catch(err => {
        throw err;
    });
};
exports.sendRequestCallback = sendRequestCallback;
