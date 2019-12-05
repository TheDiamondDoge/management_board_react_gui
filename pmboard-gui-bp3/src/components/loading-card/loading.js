import React from 'react';
import CustomCard from "../card/custom-card";
import {Spinner} from "@blueprintjs/core";
import PropTypes from "prop-types";

export default class Loading extends React.Component {
    render() {
        const {component} = this.props;
        if (component) {
            return (
                <CustomCard>
                    <Spinner
                        intent={"primary"}
                    />
                </CustomCard>
            )
        } else {
            return (
                <Spinner
                    intent={"primary"}
                />
            )
        }
    }
}

Loading.propTypes = {
    component: PropTypes.bool
};