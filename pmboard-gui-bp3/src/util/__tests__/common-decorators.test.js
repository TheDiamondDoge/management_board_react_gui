import React from 'react';
import {shallow} from 'enzyme';
import {
    arrayDecorator,
    dateDecorator,
    ErrorDecorator,
    errorDisplayDecorator, healthIndicatorsDecorator,
    impactDecorator, preDecorator, projectNameDecorator, projectNameUrlDecorator
} from "../common-decorators/common-decorators";
import Comment from "../../components/comment/comment";

it("arrayDecorator(arr)", () => {
    expect(arrayDecorator([1,"two",3,true])).toEqual("1; two; 3; true");
    expect(arrayDecorator([1])).toEqual("1");
    expect(arrayDecorator(null)).toEqual(null);
    expect(arrayDecorator(undefined)).toEqual(undefined);
    expect(arrayDecorator("hello")).toEqual("hello");
    expect(arrayDecorator(123)).toEqual(123);
})

it("dateDecorator(str)", () => {
    expect(dateDecorator(null)).toEqual("");
    expect(dateDecorator("")).toEqual("");
    expect(dateDecorator(0)).toEqual("");
    expect(dateDecorator("1970-01-01")).toEqual(<ErrorDecorator/>);
    expect(dateDecorator("2020-01-31")).toEqual("31-Jan-2020");
    expect(dateDecorator("22131-0123-3121")).toEqual("NaN-undefined-NaN");
    expect(dateDecorator("hello, this is random string")).toEqual("NaN-undefined-NaN");
})

it("impactDecorator(value)", () => {
    expect(impactDecorator(0)).toEqual("None");
    expect(impactDecorator(null)).toEqual("None");
    expect(impactDecorator(-1)).toEqual(<ErrorDecorator/>);
    expect(impactDecorator(5)).toEqual("Low (5)");
    expect(impactDecorator(6)).toEqual("Moderate (6)");
    expect(impactDecorator(10)).toEqual("Moderate (10)");
    expect(impactDecorator(11)).toEqual("High (11)");
    expect(impactDecorator("any non numeric value")).toEqual("");
})

it("errorDisplayDecorator(value)", () => {
    expect(errorDisplayDecorator(-1)).toEqual(<ErrorDecorator/>);
    expect(errorDisplayDecorator("Error")).toEqual(<ErrorDecorator/>);
    expect(errorDisplayDecorator("Any other value")).toEqual("Any other value");
    expect(errorDisplayDecorator(1)).toEqual(1);
    expect(errorDisplayDecorator(true)).toEqual(true);
})

it("preDecorator(value)", () => {
    expect(preDecorator("any value")).toEqual(<Comment value={"any value"}/>)
})

it("projectNameDecorator(name)", () => {
    expect(projectNameDecorator("super project name")).toEqual("super_project_name");
    expect(projectNameDecorator("super.project.name")).toEqual("super_project_name");
    expect(projectNameDecorator("super.project name")).toEqual("super_project_name");
    expect(projectNameDecorator("superName")).toEqual("superName");
})

it("projectNameUrlDecorator(projectName, row)", () => {
    const row = {projectId: 3950}
    const expectedUrl = `/pws?projectId=${row.projectId}`;
    const projectName = "Test Project";
    const url = shallow(projectNameUrlDecorator(projectName, row));

    expect(url.find("a").prop("href")).toEqual(expectedUrl);
    expect(url.find("a").text()).toEqual(projectName);
})

it("healthIndicatorsDecorator(value)", () => {
    const greenValue = 1;
    const yellowValue = 2;
    const redValue = 3;
    const greenIndicator = shallow(healthIndicatorsDecorator(greenValue));
    const yellowIndicator = shallow(healthIndicatorsDecorator(yellowValue));
    const redIndicator = shallow(healthIndicatorsDecorator(redValue));
    const blankIndicator = shallow(healthIndicatorsDecorator("any other value"));

    expect(greenIndicator.find("span").text()).toEqual("G");
    expect(greenIndicator.find("div").prop("className")).toMatch("color_green");

    expect(yellowIndicator.find("span").text()).toEqual("Y");
    expect(yellowIndicator.find("div").prop("className")).toMatch("color_yellow");

    expect(redIndicator.find("span").text()).toEqual("R");
    expect(redIndicator.find("div").prop("className")).toMatch("color_red");

    expect(blankIndicator.find("span").text()).toEqual("");
    expect(blankIndicator.find("div").prop("className")).toMatch("color_blank");
})