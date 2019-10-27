//TODO re-write with setValue() from formik
export const digitsOnly = (event) => {
    let str = "" + event.target.value;
    event.target.value = str.replace(/[^0-9]/gm, "");
};