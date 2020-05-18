import React from "react";
import {Button, Divider, Intent, Menu, MenuItem, Popover, Position} from "@blueprintjs/core";
import LoadingSpinner from "../../../loading-spinner/loading-spinner";
import PropTypes from "prop-types";
import {getDateFromStringWithTime} from "../../../../util/transform-funcs";

export default class ExportMenu extends React.Component {
    render() {
        const exportButtonTitle = "PPT Upload";
        return (
            <Popover
                content={this.pptMenu()}
                position={Position.BOTTOM}
            >
                <Button
                    large
                    minimal
                    icon={"download"}
                    intent={Intent.PRIMARY}
                    text={exportButtonTitle}
                />
            </Popover>
        );
    }

    pptMenu() {
        const {snapshots, snapshotLoading, projectId, onClickElement} = this.props;
        return (
            <Menu>
                <MenuItem
                    disabled
                    text={"PowerPoint, program template"}
                />
                <MenuItem
                    text={"PowerPoint, multi-page & customizable"}
                    onClick={() => onClickElement(projectId, "custom")}
                />
                <MenuItem
                    text={"PowerPoint, multi-page & indicators"}
                    onClick={() => onClickElement(projectId, "indicators")}
                />
                <MenuItem
                    text={"PowerPoint Exec review"}
                    onClick={() => onClickElement(projectId, "review")}
                />
                <Divider/>
                {snapshotLoading
                    ? <LoadingSpinner/>
                    : snapshots.map(snap => {
                        const strTimestamp = getDateFromStringWithTime(snap.timestamp);
                        const menuItemName = `Snapshot at ${strTimestamp}`;
                        return (
                            <MenuItem
                                key={snap.reportId}
                                text={menuItemName}
                                icon={"archive"}
                                onClick={() => onClickElement(projectId, "custom", snap.reportId)}
                            />
                        )
                    })
                }
            </Menu>
        )
    }
}

ExportMenu.propTypes = {
    onClickElement: PropTypes.func.isRequired,
    projectId: PropTypes.number.isRequired,
    snapshots: PropTypes.shape({
        timestamp: PropTypes.string,
        reportId: PropTypes.number
    }),
    snapshotLoading: PropTypes.bool.isRequired,
};