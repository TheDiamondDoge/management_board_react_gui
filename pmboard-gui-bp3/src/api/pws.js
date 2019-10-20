import axios from 'axios';

export const getSummaryInfo = (projectID) => (
    axios.get(`http://localhost:8080/api/projects/${projectID}/tabs/summary`)
);

export const getHealthIndicators = (projectID) => (
    axios.get(`http://localhost:8080/api/health/${projectID}`)
);

export const getMilestones = (projectID) => (
    axios.get(`http://localhost:8080/api/milestones/${projectID}`)
);

export const getIndicatorsRqs = (projectID) => (
    axios.get(`http://localhost:8080/api/indicators/requirements/${projectID}`)
);

export const getMilestonesKpi = (projectID) => (
    axios.get(`http://localhost:8080/api/indicators/milestones/${projectID}`)
);

export const getDr4Kpi = (projectID) => (
    axios.get(`http://localhost:8080/api/indicators/dr4/${projectID}`)
);

export const getQualityKpi = (projectID) => (
    axios.get(`http://localhost:8080/api/indicators/quality/${projectID}`)
);