export const digitsOnly = (event) => {
    event.persist();
    console.log("EVENT", event);
    console.log("TARGET VALUE", event.target.value);
    let str = "" + event.target.value;
    console.log("VALUE AFTER MASKING", str.replace(/[^0-9]/gm, ""));
    event.target.value = str.replace(/[^0-9]/gm, "");
    return "Q";
};