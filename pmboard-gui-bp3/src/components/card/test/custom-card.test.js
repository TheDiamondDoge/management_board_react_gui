import React from 'react';
import CustomCard from "../custom-card";
import {mount} from "enzyme";
import StatusContainer from "../../status-container/status-container";
import ErrorStatus from "../../global-statuses/error-status/error-status";

it("card should render children", () => {
    const child = <div>This is child div to be rendered</div>
    const card = mount(
        <CustomCard>
            {child}
        </CustomCard>
    );

    expect(card.contains(child)).toBe(true);
});

it("card should catch errors and render error message component", () => {
    const card = mount(
        <CustomCard>
            <DummyComponent/>
        </CustomCard>
    );

    const error = new Error("error to be thrown");
    card.find("DummyComponent").simulateError(error);

    expect(card.contains(<StatusContainer><ErrorStatus/></StatusContainer>)).toBe(true);
})

function DummyComponent(props) {
    return <div {...props}>Dummy Component</div>
}