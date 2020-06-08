import {
    createEnchantedTableFilters,
    getLabel,
    getProjectUrl,
    getPropFromStringPath,
    getSpecialNumericRegexp,
    isUrl
} from "../util";

it('getProjectUrl() project url creation', () => {
    expect(getProjectUrl(1)).toEqual("/pws?projectId=1");
    expect(getProjectUrl(10)).toEqual("/pws?projectId=10");
    expect(getProjectUrl(null)).toEqual("/pws?projectId=null");
    expect(getProjectUrl(undefined)).toEqual("/pws?projectId=undefined");
});

it('getSpecialNumericRegexp() -> testing regexp', () => {
    expect(getSpecialNumericRegexp().test("1234567890")).toBeTruthy();
    expect(getSpecialNumericRegexp().test("812763%")).toBeTruthy();
    expect(getSpecialNumericRegexp().test("0")).toBeTruthy();
    expect(getSpecialNumericRegexp().test(" ")).toBeTruthy();
    expect(getSpecialNumericRegexp().test("")).toBeTruthy();
    expect(getSpecialNumericRegexp().test("01243")).toBeFalsy();
    expect(getSpecialNumericRegexp().test("0%")).toBeFalsy();
    expect(getSpecialNumericRegexp().test("123%%")).toBeFalsy();
    expect(getSpecialNumericRegexp().test("121234%231%")).toBeFalsy();
    expect(getSpecialNumericRegexp().test("121 234")).toBeFalsy();
    expect(getSpecialNumericRegexp().test("121 234")).toBeFalsy();
    expect(getSpecialNumericRegexp().test("121.234")).toBeFalsy();
});

it('isUrl(value) -> if value is url', () => {
    expect(isUrl(1)).toBeFalsy();
    expect(isUrl("http://www.example.com")).toBeTruthy();
    expect(isUrl("https://www.example.com")).toBeTruthy();
    expect(isUrl("ftp://www.example.com")).toBeFalsy();
    expect(isUrl("http://example.com")).toBeTruthy();
    expect(isUrl("www.example.com")).toBeFalsy();
    expect(isUrl("http://example.com")).toBeTruthy();
    expect(isUrl("http://example:8000")).toBeTruthy();
});

const customLabels = {
    test: {
        1: "one",
        2: "two"
    }
};
it('getLabel(value, colId, customLabelsConfig) -> getting valid labels', () => {
    expect(getLabel(true)).toEqual("Yes");
    expect(getLabel(false)).toEqual("No");
    expect(getLabel("2020-12-31")).toEqual("31-Dec-2020");
    expect(getLabel(123)).toEqual(123);
    expect(getLabel("Hello")).toEqual("Hello");
    expect(getLabel(1, "test", customLabels)).toEqual("one");
    expect(getLabel(2, "test", customLabels)).toEqual("two");
});

it('createEnchantedTableFilters(data, customLabelsConfig)', () => {
    const tableData = [
        {
            column1: "col1data",
            column2: "col2data",
            column3: "col3data",
        },
        {
            column1: "col1data",
            column2: "col2data2",
            column3: "col3data2",
        }
    ];
    const customLabelsConfig = {
        column1: {
            col1data: "Label for col1data"
        }
    };

    const filters = createEnchantedTableFilters(tableData, customLabelsConfig);
    expect(filters.column1.length).toEqual(1);
    expect(filters.column1[0].label).toEqual(customLabelsConfig.column1.col1data);
    expect(filters.column1[0].value).toEqual("col1data");

    expect(filters.column2.length).toEqual(2);
    expect(filters.column2[0].label).toEqual("col2data");
    expect(filters.column2[0].value).toEqual("col2data");
    expect(filters.column2[1].label).toEqual("col2data2");
    expect(filters.column2[1].value).toEqual("col2data2");

    expect(filters.column3.length).toEqual(2);
    expect(filters.column3[0].label).toEqual("col3data");
    expect(filters.column3[0].value).toEqual("col3data");
    expect(filters.column3[1].label).toEqual("col3data2");
    expect(filters.column3[1].value).toEqual("col3data2");
});

it("getPropFromStringPath(obj, path)", () => {
    const object = {
        id: "idValue",
        arr: ["zero", "one", "two"],
        innerObj: {
            innerId: "innerIdValue",
            innerArr: ["innerZero", "innerOne", {innerArrId: "Hello"}]
        },

    }

    expect(getPropFromStringPath(object, "id")).toEqual("idValue");
    expect(getPropFromStringPath(object, "arr[0]")).toEqual("zero");
    expect(getPropFromStringPath(object, "arr[1]")).toEqual("one");
    expect(getPropFromStringPath(object, "arr[2]")).toEqual("two");
    expect(getPropFromStringPath(object, "innerObj.innerId")).toEqual("innerIdValue");
    expect(getPropFromStringPath(object, "innerObj.innerArr[0]")).toEqual("innerZero");
    expect(getPropFromStringPath(object, "innerObj.innerArr[1]")).toEqual("innerOne");
    expect(getPropFromStringPath(object, "innerObj.innerArr[2].innerArrId")).toEqual("Hello");
    expect(getPropFromStringPath(object, "some.wrong.path[2]")).toEqual(undefined);
});