import React from 'react';
import {Button, Intent} from "@blueprintjs/core";

export default class EditSaveControls extends React.Component {
    state = {
        editMode: false,
    };

    render() {
        return (
            this.renderElements(this.state.editMode)
        )
    }

    renderElements = (editMode) => {
        if (editMode) {
            return (
                <div>
                    <Button
                        minimal={true}
                        text={"Save"}
                        icon={"saved"}
                        large={true}
                        onClick={this.onClickHandler}
                        intent={Intent.PRIMARY}
                    />
                    <Button
                        minimal={true}
                        text={"Cancel"}
                        icon={"undo"}
                        large={true}
                        onClick={this.onClickHandler}
                        intent={Intent.PRIMARY}
                    />
                </div>
            )
        } else {
            return (
                <div>
                    <Button
                        minimal={true}
                        text={"Edit"}
                        icon={"edit"}
                        large={true}
                        onClick={this.onClickHandler}
                        intent={Intent.PRIMARY}
                    />
                </div>
            )
        }
    };

    onClickHandler = () => {
        this.setState((prevState) => ({
            editMode: !prevState.editMode
        }))
    };

};

