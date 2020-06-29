import React from "react";
import {shallow} from "enzyme";
import FieldName from "../field-name";

it("render field name", () => {
    const name = "Test Name";
    const fieldNameWrapper = shallow(<FieldName name={name}/>);

    expect(fieldNameWrapper.find("span").text()).toEqual("Test Name");
});

it("render field name with additional classNames", () => {
    const name = "Test Name";
    const className = "test_class";
    const fieldNameWrapper = shallow(<FieldName name={name} className={className}/>);

    const spanElement = fieldNameWrapper.find("span");
    expect(spanElement.text()).toEqual("Test Name");
    expect(spanElement.hasClass(className)).toBe(true);
});