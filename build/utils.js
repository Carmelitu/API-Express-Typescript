"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const parseComment = (commentFromReq) => {
    if (!isString(commentFromReq)) {
        throw new Error('Incorrect or missing comment');
    }
    return commentFromReq;
};
const parseDate = (dateFormReq) => {
    if (!isDate(dateFormReq)) {
        throw new Error('Incorrect or missing date');
    }
    return dateFormReq;
};
const parseWeather = (weatherFromReq) => {
    if (!isString(weatherFromReq) || !isWeather(weatherFromReq)) {
        throw new Error('Incorrect or missing Weather');
    }
    return weatherFromReq;
};
const parseVisibility = (visibilityFromReq) => {
    if (!isString(visibilityFromReq) || !isVisibility(visibilityFromReq)) {
        throw new Error('Incorrect or missing Visibility');
    }
    return visibilityFromReq;
};
const isString = (string) => {
    return typeof string === 'string' || string instanceof String;
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const isWeather = (param) => {
    return Object.values(enums_1.Weather).includes(param);
};
const isVisibility = (param) => {
    return Object.values(enums_1.Visibility).includes(param);
};
const toNewDiaryEntry = (object) => {
    const newEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;
