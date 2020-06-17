import React from "react";
import {Button, Divider, Intent, Menu, MenuItem, Popover, Position} from "@blueprintjs/core";
import LoadingSpinner from "../../../loading-spinner/loading-spinner";
import PropTypes from "prop-types";
import {getDateFromStringWithTime} from "../../../../util/transform-funcs";

export default class ExportMenu extends React.Component {
    render() {
        const exportButtonTitle = "PPT Upload";
        const {buttonLoading} = this.props;
        return (
            <Popover
                content={this.pptMenu()}
                position={Position.BOTTOM}
            >
                <Button
                    large
                    minimal
                    loading={buttonLoading}
                    icon={"download"}
                    intent={Intent.PRIMARY}
                    text={exportButtonTitle}
                />
            </Popover>
        );
    }

    pptMenu() {
        const {snapshots, snapshotLoading, onClickElement} = this.props;
        return (
            <Menu>
                <MenuItem
                    disabled
                    text={"PowerPoint, program template"}
                />
                <MenuItem
                    text={"PowerPoint, multi-page & customizable"}
                    onClick={() => onClickElement("custom")}
                />
                <MenuItem
                    text={"PowerPoint, multi-page & indicators"}
                    onClick={() => onClickElement("indicators")}
                />
                <MenuItem
                    text={"PowerPoint Exec review"}
                    onClick={() => onClickElement("review")}
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
                                onClick={() => onClickElement("custom", snap.reportId)}
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
    snapshots: PropTypes.arrayOf(
        PropTypes.shape({
            timestamp: PropTypes.string,
            reportId: PropTypes.number
        })
    ),
    snapshotLoading: PropTypes.bool.isRequired,
    buttonLoading: PropTypes.bool
};

ExportMenu.defaultProps = {
    buttonLoading: false
}