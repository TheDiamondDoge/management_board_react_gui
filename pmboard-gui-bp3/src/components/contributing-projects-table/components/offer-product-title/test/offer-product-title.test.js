import React from "react";
import OfferProductTitle from "../offer-product-title";
import {mount} from "enzyme";

it("render without props", () => {
    const titleWrapper = mount(<OfferProductTitle/>);
    const title = "Your project has not been identified as contributing to an Offer";

    expect(titleWrapper.find("span").text()).toEqual(title);
    expect(titleWrapper.find("span").hasClass(/\s?red\s?/));
});

it("className should be passed", () => {
    const className = "test_class";
    const titleWrapper = mount(<OfferProductTitle className={className}/>);

    expect(titleWrapper.find("span").hasClass(className)).toBe(true);
});

it("render title for offer", () => {
    const titleWrapper = mount(<OfferProductTitle isOffer />);
    const offerTitle = "Contributing Open Projects:";

    expect(titleWrapper.find("span").text()).toEqual(offerTitle);
});

it("render title for contrib project", () => {
    const titleWrapper = mount(<OfferProductTitle isContrib />);
    const contribTitle = "Your project has been identified as contributing to the following Offer Project or Solution Release:";

    expect(titleWrapper.find("span").text()).toEqual(contribTitle);
});