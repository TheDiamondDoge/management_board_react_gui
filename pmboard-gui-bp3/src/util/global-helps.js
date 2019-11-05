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