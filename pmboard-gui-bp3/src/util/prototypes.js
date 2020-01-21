if (String.prototype.includesWithMultiple === undefined) {
    String.prototype.includesWithMultiple = function (values) {
        let count = 0;
        values.forEach((value) => {
            if (String(value).valueOf() === this.valueOf()) {
                count++;
            }
        });
        return (count > 0);
    };
}