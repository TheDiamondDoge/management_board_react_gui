import React from "react";
import {mount} from "enzyme";
import ErrorBoundary from "../error-boundary";
import StatusContainer from "../../status-container/status-container";
import ErrorStatus from "../../global-statuses/error-status/error-status";

const DummyComponent = () => null;

it("boundary should catch children errors and render error message", () => {
    const errorBoundaryWrapper = mount(<ErrorBoundary><DummyComponent/></ErrorBoundary>);

    const error = new Error("error to be thrown");
    errorBoundaryWrapper.find("DummyComponent").simulateError(error);

    expect(errorBoundaryWrapper.contains(<StatusContainer><ErrorStatus/></StatusContainer>)).toBe(true);
});