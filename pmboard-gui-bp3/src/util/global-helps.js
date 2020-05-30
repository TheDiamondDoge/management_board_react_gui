export const healthStatusHelp = {
    title: "Status",
    content: "Your project faces some issues impacting Dates, Cost, Content or Quality:</br>" +
        "is it worth a \"Y\", worth a \"R\" ? </br></br>" +
        "Some hints, as there is no defined policy; </br></br>" +
        "If the variance is small you may remain \"G\"; examples:</br>" +
        "<ul>" +
        "<li>an intermediate milestone (not DR4 nor DR5) shifts less than 5% </li>" +
        "<li>costs increase less than 5%</li>" +
        "<li>nice-to-have feature is de-scoped</li>" +
        "</ul>" +
        "</br>" +
        "else consider following criteria : </br>" +
        "<ul>" +
        "    <li>is an external customer impacted ? </li>" +
        "    <li>is another project impacted ?</li>" +
        "    <li>is business impacted ? </li>" +
        "</ul>" +
        "if answer is 'no' to all of them, then \"Y\" is the right value, else \"R\" applies; </br></br>" +
        "Quality : consider test coverage as well as ecma backlog; if test coverage (passed OK) < 100% then \"Y\" or \"R\", whatever the backlog;</br></br>" +
        "If ecma backlog higher than target, then \"Y\" or \"R\" (difference > 10%)"
};

export const scheduleAdherenceHelp = {
    title: "KPI Goals - Schedule",
    content: "Schedule Variance = (Actual/Forecast DR4 date - Actual DR1 date) / (Committed DR4 date - Actual DR1 date)"
};

export const contentAdherenceHelp = {
    title: "Ratio of requirements committed at DR1 and delivered unchanged",
    content: "Content Adherence = (<u># Requirements committed (baseline) at DR1</u> - <u>Current # of baselined requirements " +
        "removed after DR1</u> - <u>Current # of baseline requirements modified after DR1)</u> / <u># Requirements committed (baseline) " +
        "at DR1</u> * 100%"
};

export const rqsChangeHelp = {
    title: "Ratio of changes compared to committed requirements",
    content: "Requirements Change = <u>(Current # of requirements added after DR1 + Current # of baselined requirements " +
        "removed after DR1</u> + <u>Current # of baselined requirements modified after DR1)</u> /  <u># Requirements committed (baseline) " +
        "at DR1</u> * 100%"
};

export const costAdherenceHelp = {
    title: "Cost Adherence",
    content: "Cost-variance = (costs realized at DR4) / (costs up to DR4 committed at DR1) <br/><br/>" +
        "Included: effort, Opex & Capex (see Cost tab)"
};

export const qualityKpiHelp = {
    title: "Quality (ecma CRs)",
    content: "This indicator represents the quality of the product, i.e. the defects that are still open; This includes:" +
        "<ul>" +
        "<li>New Open Defects (dedicated KPI)</li>" +
        "<li>Defects found on another release, needing a fix on this release (reports)</li>" +
        "</ul>" +
        "<u>Actual value</u>: current NB of CRs, if date > DR4 it is the NB of CRs at DR4" +
        "<br/>" +
        "<br/>" +
        "<u>Objective</u>: DR4 target, NB of CRs"
}

export const newOpenDefectsHelp = {
    title: "New Open Defects (ecma CRs)",
    content: "This indicator is part of the quality of the product, i.e. the defects submitted on this project " +
        "(see ‘metrics scope’ in Info TAB); reports are not included; for ‘OT’, related component CRs are included" +
        "<br/>" +
        "<br/>" +
        "<u>Actual value</u> : current NB of CRs, if date > DR4 it is the NB of CRs at DR4" +
        "<br/>" +
        "<br/>" +
        "<u>Objective</u> : DR4 target, NB of CRs",
}

export const backlogReductionHelp = {
    title: "Backlog Reduction (ecma CRs)",
    content: "This indicator represents the contribution of the project to the quality improvement of the product; " +
        "in other words the defects in the backlog at DR1 on this project (all releases), that are no longer in the backlog " +
        "at DR4 AND that have been closed by this project (see ‘metrics scope’ in Info TAB);" +
        "<br/>" +
        "<br/>" +
        "<u>Actual value</u> : current NB of CRs, if date > DR4 it is the NB of CRs at DR4" +
        "<br/>" +
        "<br/>" +
        "<u>Objective</u> : DR4 target, NB of CRs"
}

export const testExecutionHelp = {
    title: "Test execution",
    content: "Provide number (or ratio) of tests executed (actual value), as well as the objective;" +
        "<br/>" +
        "<br/>" +
        "Actual value can be a link to testrail report;" +
        "<br/>" +
        "In case you need to split test coverage to several topics (or campaigns) add a line " +
        "('green plus' button is displayed when entering edition mode)"
};

export const testPassHelp = {
    title: "Test pass",
    content: "Provide number (or ratio) of tests successfully executed (actual value), as well as the objective;" +
        "<br/>" +
        "<br/>" +
        "Actual value can be a link to testrail report;" +
        "<br/>" +
        "In case you need to split test coverage to several topics (or campaigns) add a line " +
        "('green plus' button is displayed when entering edition mode)"
};

export const updBusinessPlanCommentHelp = {
    title: "Updated Business Plan Comment",
    content: "Where is this info provided ? Can be an update of the OR Business Plan, a new dedicated document, " +
        "some slides in DR1 (OBR, DR3 …) meeting minutes …"
}

export const tailoringCommentHelp = {
    title: "Tailoring Comment",
    content: "Where is this info provided ? Can be a dedicated tailored DR-checklist, " +
        "a chapter in the Charter or some slides in DR0 (DR1, OBR, …) meeting minutes …"
}

export const lessonsLearnedHelp = {
    title: "Lessons Learned Comment",
    content: "Where is this info provided ? Can be a dedicated document, some slides in DR0 (DR1, OBR, DR4 …) meeting minutes …" +
        "<br/>" +
        "When project starts, provide the link to the lessons learned used to improve the process ; when the project ends, " +
        "provide the links of the lessons learned you want to share, that other Releases (or projects) may use"
}

export const projectPlanHelp = {
    title: "Project Plan Comment",
    content: "Where is this info provided ? Can be a dedicated document, some slides in DR0 (DR1, OBR, …) meeting minutes …"
}

export const launchingPlanHelp = {
    title: "Launching Plan Comment",
    content: "Where is this info provided ? Can be a dedicated document, some slides in DR0 (DR1, OBR, …) meeting minutes …"
}

export const defectsBacklogChartHelp = {
    title: "Defects backlog (ecma)",
    content: "This indicator represents the remaining work i.e. the ‘to be closed’ defects; reports are included; " +
        "CRs that are targeted on “MDs” are included when project is a Maintenance project" +
        "<br/>" +
        "Information TAB provides the target (milestone and value) as well as the Metrics' scope"
};

export const newOpenDefectsChartHelp = {
    title: "New Open Defects (ecma CRs)",
    content: "This indicator is part of the quality of the product, i.e. the defects submitted on this project " +
        "(see ‘metrics scope’ in Info TAB); reports are not included; for ‘OT’, related component CRs are included"
};

export const blcDashboardHelp = {
    title: "BLC Dashboard",
    content: "Values :<br>" +
        "0 (no feedback), 1 (red), 5 (orange) and 8 (green)<br>" +
        " <br>" +
        " Some examples<br>" +
        " Documents:<br>" +
        " - info not available (either dedicated document or DR contribution) : red;<br>" +
        " - almost all info available : green;<br>" +
        " - one major info missing : yellow.<br>" +
        " <br>" +
        " Accountability (PM or PCT) :<br>" +
        " - decisions are not by-passed by manager : green;<br>" +
        " - decisions are cancelled by X (including by escalation) : red<br>" +
        " <br>" +
        " Lessons Learned: <br>" +
        " - not recorded : red;<br>" +
        " - recorded and taken into account : green;<br>" +
        " - recorded but not taken into account : orange.<br>" +
        " <br>" +
        "Sales &amp; Marketing provides feedback on Business Plan and Launch Plan;<br>" +
        " PMO-Quality provides feedback on Opportunity Review, Charter, Project Management Plan and Business Plan."
};