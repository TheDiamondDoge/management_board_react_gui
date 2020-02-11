import React from 'react';
import PropTypes from 'prop-types';
import CustomCard from "../../../card/custom-card";
import LoadingSpinner from "../../../loading-spinner/loading-spinner";
import BarChart from "../../../bar-chart/bar-chart";

export default class BacklogTab extends React.Component {
    componentDidMount() {
        this.props.loadData();
    }

    componentWillUnmount() {
        this.props.resetData();
    }


    render() {
        const {loading} = this.props;
        if (loading) {
            return <CustomCard><LoadingSpinner/></CustomCard>
        } else {
            const {payload} = this.props.backlog;
            return (
                <CustomCard autosize>
                    <BarChart data={payload}/>
                </CustomCard>
            );
        }
    }
}

BacklogTab.propTypes = {
    loadData: PropTypes.func.isRequired,
    resetData: PropTypes.func.isRequired,
    backlog: PropTypes.shape({
        loading: PropTypes.bool.isRequired,
        payload: PropTypes.object.isRequired
    })
};