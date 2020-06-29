import React from "react";
import {mount, shallow} from "enzyme";
import FieldValue from "../field-value";

it("render field value", () => {
    const value = "Test value (can be also bool or number)";
    const fieldValueWrapper = shallow(<FieldValue value={value}/>);

    expect(fieldValueWrapper.find("div").text()).toEqual(value);
})

it("className should be passed down", () => {
    const value = "Test value (can be also bool or number)";
    const className = "test_class";
    const fieldValueWrapper = shallow(
        <FieldValue
            value={value}
            className={className}
        />
    );

    expect(fieldValueWrapper.find("div").hasClass(className)).toBe(true);
});

describe("render url ", () => {
    it("with default url label", () => {
        const url = "http://www.someurl.com";
        const defaultLabel = "Click here";
        const fieldValueWrapper = mount(<FieldValue value={url}/>);

        const aElement = fieldValueWrapper.find("a");
        expect(aElement.prop("href")).toEqual(url);
        expect(aElement.text()).toEqual(defaultLabel);
    });

    it("with custom url label", () => {
        const url = "http://www.someurl.com";
        const customLabel = "New Amazing URL label";
        const fieldValueWrapper = mount(
            <FieldValue
                value={url}
                useName={customLabel}
            />
        );

        const aElement = fieldValueWrapper.find("a");
        expect(aElement.prop("href")).toEqual(url);
        expect(aElement.text()).toEqual(customLabel);
    })
})