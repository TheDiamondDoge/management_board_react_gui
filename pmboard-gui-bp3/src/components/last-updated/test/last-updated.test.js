import React from 'react';
import {shallow} from "enzyme";
import LastUpdated from "../last-updated";

describe("render lastUpdated (now is 01-Jan-2020)", () => {
    Date.now = jest.fn(() => new Date("2020-01-01T00:00:00"));
    it("last updated less than 1 month before now", () => {
        const dateStr = "2019-12-15T00:00:00";
        const lastUpdatedWrapper = shallow(<LastUpdated dateStr={dateStr} />);

        expect(lastUpdatedWrapper.find("span").text()).toEqual("15-Dec-19 00:00:00");
    });

    it("last updated more than 1 month before now", () => {
        const dateStr = "2019-10-21T00:00:00";
        const lastUpdatedWrapper = shallow(<LastUpdated dateStr={dateStr} />);
        const defaultWarning = "Last time updated more than 1 month ago";

        const dateStrElement = lastUpdatedWrapper.find("span").at(0);
        const warningElement = lastUpdatedWrapper.find("span").at(1);
        expect(dateStrElement.text()).toEqual("21-Oct-19 00:00:00");
        expect(dateStrElement.hasClass("red")).toBe(true);
        expect(warningElement.prop("title")).toEqual(defaultWarning);
    });
});