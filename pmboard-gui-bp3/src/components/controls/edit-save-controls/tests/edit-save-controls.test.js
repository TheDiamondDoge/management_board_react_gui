import React from "react";
import EditSaveControls from "../edit-save-controls";
import {mount} from "enzyme";

it("edit-save-controls no props", () => {
    const editSaveControls = mount(<EditSaveControls />);

    expect(editSaveControls.find("span.bp3-button-text").text()).toEqual("Edit");
    expect(editSaveControls.find("span[icon='edit']")).toBeTruthy();
});

it("edit-controls default btn clicks", () => {
    const onClick = jest.fn();

    const editControls = mount(
        <EditSaveControls
            className={"test-class"}
            onClick={onClick}
        />
    );

    expect(editControls.find("div.test-class")).toBeTruthy();

    const editButton = editControls.find("button");
    editButton.simulate('click');

    expect(onClick).toHaveBeenCalledTimes(1);
});

it("edit-save-controls edit mode", () => {
    const onCancel = jest.fn();
    const onSubmit = jest.fn();

    const saveCancelControls = mount(
        <EditSaveControls
            className={"test-class"}
            editMode
            onSubmit={onSubmit}
            onCancel={onCancel}
        />
    );

    expect(saveCancelControls.find("div.test-class")).toBeTruthy();

    const saveButton = saveCancelControls.find("button.bp3-intent-success");
    const cancelButton = saveCancelControls.find("button.bp3-intent-danger");

    saveButton.simulate("click");
    cancelButton.simulate("click");

    expect(onCancel).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledTimes(1);
});

it("edit-save-controls loading", () => {
    const editSaveControls = mount(<EditSaveControls loading/>);

    const editButton = editSaveControls.find("button");
    expect(editButton).toBeTruthy();
    expect(editButton.hasClass("bp3-loading")).toBe(true);
    expect(editButton.props().disabled).toBeTruthy();
});

it("edit-save-controls minimal", () => {
    const editSaveControls = mount(<EditSaveControls smallSize />);

    // toEqual({}) means that no `span.bp3-button-text` element found
    expect(editSaveControls.find("span.bp3-button-text")).toEqual({});
    expect(editSaveControls.find("span[icon='edit']")).toBeTruthy();
});