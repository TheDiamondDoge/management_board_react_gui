import React from "react";
import Comment from "../comment";
import {shallow} from "enzyme";

it("comment should render value inside <pre>", () => {
    const testValue = "This is the test value";
    const commentWrapper = shallow(<Comment value={testValue}/>);

    expect(commentWrapper.find("pre").text()).toEqual(testValue);
});

it("comment should pass className to div container", () => {
    const testClassName = "test_class";
    const commentWrapper = shallow(<Comment className={testClassName} />);

    expect(commentWrapper.find("div").hasClass(testClassName)).toBe(true);
});