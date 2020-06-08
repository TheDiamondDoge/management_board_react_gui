import RenderFieldHelper from "../render-field-helper";

const config = {
    attrOne: {
        label: "First attribute",
        type: "input",
        editable: true,
        notAllowedIf: {
            validationParamOne: ["valid"]
        },
        help: {
            title: "Help 1",
            content: "This is help one"
        }
    },
    attrTwo: {
        label: "Second attribute",
        type: "textarea",
        editable: false,
        allowedIf: {
            validationParamTwo: [false],
        },
        help: {
            title: "Help 2",
            content: "This is help two"
        }
    }
};

const validationParams = {
    validationParamOne: "valid",
    validationParamTwo: false,
}

const renderHelper = new RenderFieldHelper(config, validationParams);
it("shouldFieldRender", () => {
    //cuz not allowed if validationParamOne = "valid"
    expect(renderHelper.displayOrNot("attrOne")).toBeFalsy();

    //cuz allowed if validationParamTwo = "false"
    expect(renderHelper.displayOrNot("attrTwo")).toBeTruthy();
});

it("isFieldEditable", () => {
    expect(renderHelper.isAttrExists("attrOne")).toBeTruthy();
    expect(renderHelper.isAttrExists("attrTwo")).toBeTruthy();
    expect(renderHelper.isAttrExists("attrThree")).toBeFalsy();
});

it("isLabelExists", () => {
    expect(renderHelper.isAttrExists("attrOne")).toBeTruthy();
    expect(renderHelper.isAttrExists("attrThree")).toBeFalsy();
});

it("getLabelById", () => {
    expect(renderHelper.getLabelById("attrOne")).toEqual("First attribute");
    expect(renderHelper.getLabelById("attrTwo")).toEqual("Second attribute");
});

it("getHelpObject", () => {
    expect(renderHelper.getHelpObject("attrOne").title).toEqual("Help 1");
    expect(renderHelper.getHelpObject("attrOne").content).toEqual("This is help one");

    expect(renderHelper.getHelpObject("attrTwo").title).toEqual("Help 2");
    expect(renderHelper.getHelpObject("attrTwo").content).toEqual("This is help two");
});