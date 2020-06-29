import React from "react";
import {shallow} from "enzyme";
import ExcelError from "../excel-error";

it("render error", () => {
    const cellIndex = 1;
    const rowIndex = 2;
    const message = "This is an error";
    const excelErrorWrapper = shallow(
        <ExcelError
            cellIndex={cellIndex}
            rowIndex={rowIndex}
            message={message}
        />
    );

    expect(excelErrorWrapper.find("div").text())
        .toEqual(`Column: ${cellIndex + 1}. Row: ${rowIndex + 1}. Error: ${message}`);
});