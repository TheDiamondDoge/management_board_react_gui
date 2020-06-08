import moment from "moment";

const MONTHS_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const blcNumberToState = (num) => {
    switch (num) {
        case 1:
            return "red";
        case 5:
            return "yellow";
        case 8:
            return "green";
        default:
            return "blank"
    }
};

export const nanToEmptyString = (num) => (
    isNaN(num) ? "" : num
);

export const isDateLateForOneMonth = (dateStr) => {
    const date = moment(dateStr);
    return moment().diff(date, "month") >= 1;
};

export const dateFormatToString = (date) => {
    if (!isDate(date)) return "";
    if (date.getTime() === new Date("1970-01-01").getTime()) return "";

    let day = date.getDate();
    let month = MONTHS_NAMES[date.getMonth()];
    let year = date.getFullYear().toString();

    return `${day}-${month}-${year}`;
};

export const getDateFromStringWithTime = (str) => {
    if (str === "" || str == "null") return str;
    const dateInSeconds = Date.parse(str);
    if (isNaN(dateInSeconds)) return "";

    const date = new Date(dateInSeconds);
    const day = date.getDate();
    const month = MONTHS_NAMES[date.getMonth()];
    const year = date.getFullYear().toString().slice(2);
    const hours = doubleDigitTimeUnit(date.getHours());
    const minutes = doubleDigitTimeUnit(date.getMinutes());
    const seconds = doubleDigitTimeUnit(date.getSeconds());

    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
};

function doubleDigitTimeUnit(num) {
    return num < 10 ? "0" + num : num;
}

function isDate(date) {
    return date && typeof date.getMonth === "function";
}

export const stringToDateFormat = (string) => {
    let [day, month, year] = string.split("-");
    let strMonth = doubleDigitTimeUnit(MONTHS_NAMES.indexOf(month) + 1);
    let strDay = doubleDigitTimeUnit(day);
    return new Date(`${year}-${strMonth}-${strDay}`);
};

export const nullToEmptyStr = (str) => (
    str == null || str == "null" ? "" : str
);

export const nullToNA = (value) => (
    value === null || value == "null" ? "N/A" : value
);

export const transformDateForInput = (str) => {
    if (!str) return null;
    try {
        const date = new Date(str);
        if (date == "Invalid Date") throw new Error();
        return date;
    } catch (e) {
        return null;
    }
};

export const boolToYesNo = (val) => (
    val === true ? "Yes" : "No"
);

export const getIndicatorsColor = (number) => {
    switch (number) {
        case 1:
            return "green";
        case 2:
            return "yellow";
        case 3:
            return "red";
        default:
            return "blank";
    }
};

export const toPercentsNumber = (value) => {
    if (value === null) return "N/A";
    return +(value * 100).toFixed(0);
};

export const toPercentsOrNA = (value) => {
    if (value === null) return "N/A";
    const result = toPercentsNumber(value);
    return Number.isNaN(result) ? "N/A" : result + "%";
}

export const toTwoTrailingDigits = (value) => {
    return +(+value).toFixed(2);
};