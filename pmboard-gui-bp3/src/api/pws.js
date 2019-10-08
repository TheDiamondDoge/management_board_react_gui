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
