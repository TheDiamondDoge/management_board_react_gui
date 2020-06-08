import {isBoolean, milestonesCompare, picklistObjectsCompare, stringCompare} from "../comparators";

it("stringCompare", () => {
    expect(stringCompare("", "str two")).toEqual(1);
    expect(stringCompare("str one", "")).toEqual(-1);
    expect(stringCompare("str one", "str one")).toEqual(0);
    expect(stringCompare("sTr OnE", "StR oNe")).toEqual(0);
    expect(stringCompare("alpha", "beta")).toEqual(-1);
    expect(stringCompare("beta", "alpha")).toEqual(1);
});

it("isBoolean", () => {
    expect(isBoolean(true)).toBeTruthy();
    expect(isBoolean(false)).toBeTruthy();

    expect(isBoolean("")).toBeFalsy();
    expect(isBoolean("a")).toBeFalsy();
    expect(isBoolean(1)).toBeFalsy();
    expect(isBoolean(0)).toBeFalsy();
});

it("milestonesCompare", () => {
    const first = {actualDate: ""};
    const second = {actualDate: ""};

    expect(milestonesCompare(first, second)).toEqual(0);

    first.actualDate = "2019-01-01";
    expect(milestonesCompare(first, second)).toEqual(1);

    first.actualDate = "";
    second.actualDate = "2019-01-01";
    expect(milestonesCompare(first, second)).toEqual(-1);

    first.actualDate = "2019-01-02";
    second.actualDate = "2019-01-01";
    expect(milestonesCompare(first, second)).toEqual(1);

    first.actualDate = "2019-01-01";
    second.actualDate = "2019-01-01";
    expect(milestonesCompare(first, second)).toEqual(0);

    first.actualDate = "2019-01-01";
    second.actualDate = "2019-01-02";
    expect(milestonesCompare(first, second)).toEqual(-1);
});

it("picklistObjectsCompare", () => {
    const first = {label: "beTa"};
    const second = {label: "ALpHa"};

    expect(picklistObjectsCompare(null, null)).toEqual(0);
    expect(picklistObjectsCompare(first, null)).toEqual(1);
    expect(picklistObjectsCompare(null, second)).toEqual(-1);
    expect(picklistObjectsCompare(first, second)).toEqual(1);
    expect(picklistObjectsCompare(second, first)).toEqual(-1);
    expect(picklistObjectsCompare(first, first)).toEqual(0);
});