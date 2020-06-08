import {
    blcNumberToState,
    boolToYesNo,
    dateFormatToString,
    getDateFromStringWithTime,
    getIndicatorsColor,
    isDateLateForOneMonth,
    nanToEmptyString,
    nullToEmptyStr,
    nullToNA,
    stringToDateFormat,
    toPercentsNumber,
    toPercentsOrNA, toTwoTrailingDigits,
    transformDateForInput
} from "../transform-funcs";

it("blcNumberToState(num)", () => {
    expect(blcNumberToState(1)).toEqual("red");
    expect(blcNumberToState(5)).toEqual("yellow");
    expect(blcNumberToState(8)).toEqual("green");
    expect(blcNumberToState(0)).toEqual("blank");
    expect(blcNumberToState(null)).toEqual("blank");
    expect(blcNumberToState(undefined)).toEqual("blank");
    expect(blcNumberToState("")).toEqual("blank");
});

it("nanToEmptyString(num)", () => {
    expect(nanToEmptyString(1)).toEqual(1);
    expect(nanToEmptyString(Number.NaN)).toEqual("");
    expect(nanToEmptyString("WhateverString")).toEqual("");
});

it('isDateLateForOneMonth(dateStr)', () => {
    Date.now = jest.fn(() => new Date("2020-09-12"));
    expect(isDateLateForOneMonth("2020-10-13")).toBeFalsy();
    expect(isDateLateForOneMonth("2020-12-31")).toBeFalsy();
    expect(isDateLateForOneMonth("2020-08-11")).toBeTruthy();
    expect(isDateLateForOneMonth("2020-01-01")).toBeTruthy();
});

it('dateFormatToString(date)', () => {
    expect(dateFormatToString("")).toEqual("");
    expect(dateFormatToString(null)).toEqual("");
    expect(dateFormatToString(undefined)).toEqual("");
    expect(dateFormatToString("any not a date obj")).toEqual("");
    expect(dateFormatToString(new Date("1970-01-01"))).toEqual("");
    expect(dateFormatToString(new Date("2020-01-01"))).toEqual("1-Jan-2020");
});

it('getDateFromStringWithTime(str)', () => {
    expect(getDateFromStringWithTime("")).toEqual("")
    expect(getDateFromStringWithTime(null)).toEqual("")
    expect(getDateFromStringWithTime("some not date strings")).toEqual("")
    expect(getDateFromStringWithTime("2020-01-01T01:01:01")).toEqual("1-Jan-20 01:01:01")
});

it('stringToDateFormat(string)', () => {
    expect(stringToDateFormat("1-Jan-2020")).toEqual(new Date("2020-01-01"));
    expect(stringToDateFormat("21-Feb-2020")).toEqual(new Date("2020-02-21"));
});

it('nullToEmptyStr(str)', () => {
    expect(nullToEmptyStr(null)).toEqual("");
    expect(nullToEmptyStr('null')).toEqual("");
    expect(nullToEmptyStr("String")).toEqual("String");
    expect(nullToEmptyStr(1)).toEqual(1);
    expect(nullToEmptyStr(0)).toEqual(0);
});

it('nullToNA(value)', () => {
    expect(nullToNA(null)).toEqual("N/A");
    expect(nullToNA("null")).toEqual("N/A");
    expect(nullToNA("String")).toEqual("String");
    expect(nullToNA(1)).toEqual(1);
    expect(nullToNA(0)).toEqual(0);
});

it("transformDateForInput(str)", () => {
    expect(transformDateForInput("2020-08-06")).toEqual(new Date("2020-08-06"));
    expect(transformDateForInput("2020-13-13")).toEqual(null);
    expect(transformDateForInput("Some not date string")).toEqual(null);
    expect(transformDateForInput(null)).toEqual(null);
    expect(transformDateForInput(undefined)).toEqual(null);
});

it("boolToYesNo(val)", () => {
    expect(boolToYesNo(true)).toEqual("Yes");
    expect(boolToYesNo(false)).toEqual("No");
    expect(boolToYesNo(null)).toEqual("No");
    expect(boolToYesNo(undefined)).toEqual("No");
    expect(boolToYesNo(1)).toEqual("No");
    expect(boolToYesNo(0)).toEqual("No");
    expect(boolToYesNo("Any string")).toEqual("No");
});

it("getIndicatorsColor(number)", () => {
    expect(getIndicatorsColor(1)).toEqual("green");
    expect(getIndicatorsColor(2)).toEqual("yellow");
    expect(getIndicatorsColor(3)).toEqual("red");
    expect(getIndicatorsColor(5234)).toEqual("blank");
    expect(getIndicatorsColor("Any value except 1-3")).toEqual("blank");
});

it("toPercentsNumber(value)", () => {
    expect(toPercentsNumber(0.2334)).toEqual(23);
    expect(toPercentsNumber("0.324")).toEqual(32);
    expect(toPercentsNumber("Not a number")).toEqual(Number.NaN);
    expect(toPercentsNumber(null)).toEqual("N/A");
});

it("toPercentsOrNA(value)", () => {
    expect(toPercentsOrNA(0.2334)).toEqual("23%");
    expect(toPercentsOrNA("0.324")).toEqual("32%");
    expect(toPercentsOrNA("Not a number")).toEqual("N/A");
    expect(toPercentsOrNA(null)).toEqual("N/A");
});

it("toTwoTrailingDigits(value)", () => {
    expect(toTwoTrailingDigits(12.234)).toEqual(12.23);
    expect(toTwoTrailingDigits("12")).toEqual(12);
    expect(toTwoTrailingDigits(12.545)).toEqual(12.54);
    expect(toTwoTrailingDigits(null)).toEqual(0);
    expect(Number.isNaN(toTwoTrailingDigits("Not a string"))).toBeTruthy();
});