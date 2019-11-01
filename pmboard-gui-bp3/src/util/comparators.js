export function milestonesCompare(a, b) {
    if (!a.actualDate) {
        if (!b.actualDate) {
            return 0;
        } else {
            return 1;
        }
    }

    const dateA = new Date(a.actualDate);
    const dateB = new Date(b.actualDate);

    if (dateA > dateB) {
        return 1;
    } else if (dateA < dateB) {
        return -1;
    } else {
        return stringCompare(a.label, b.label);
    }
}

export function stringCompare(a, b){
    if (!a) {
        if (!b) {
            return 0;
        } else {
            return 1;
        }
    }

    for (let i = 0; i < a.length; i++) {
        if (b.length - 1 >= i) {
            let tmp = a[i].toLowerCase().localeCompare(b[i].toLowerCase());
            if (tmp === -1 || tmp === 1) {
                console.log("!", tmp);
                return tmp;
            }
        } else {
            return -1;
        }
    }
    return 0;
}



