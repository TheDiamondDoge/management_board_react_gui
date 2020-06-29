import React from "react";
import {mount} from "enzyme";
import ProjectNotFoundStatus from "../project-not-found-status";

it("render project-not-found without params", () => {
    const projectNotFoundStatusWrapper = mount(<ProjectNotFoundStatus />);
    const defaultMessage = "Project not found";

    expect(projectNotFoundStatusWrapper.find("FieldValue").prop("value")).toEqual(defaultMessage);
});

it("render project-not-found with id", () => {
    const id = -1;
    const projectNotFoundStatusWrapper = mount(<ProjectNotFoundStatus id={id} />);
    const errorMessage = `Project with id ${id} - not found`;

    expect(projectNotFoundStatusWrapper.find("FieldValue").prop("value")).toEqual(errorMessage);
});