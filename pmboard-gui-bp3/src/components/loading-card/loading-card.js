import React from 'react';
import {CustomCard} from "../card/customCard";
import {Spinner} from "@blueprintjs/core";

export default class LoadingCard extends React.Component {
    render() {
        return (
            <CustomCard>
                <Spinner
                    intent={"primary"}
                />
            </CustomCard>
        )
    }
}