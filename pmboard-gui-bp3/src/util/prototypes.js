if (String.prototype.includesWithMultiple === undefined) {
    String.prototype.includesWithMultiple = function (values) {
        let count = 0;
        values.forEach((value) => {
            count = count + this.includes(value);
        });
        return (count > 0);
    };
}