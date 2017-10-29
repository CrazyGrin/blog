function Operation({operation, data} = {}) {
    this.operation = operation;
    this.data = data;
}

Operation.prototype = {
    construct: Operation,
    toString: function() {
        return JSON.stringify(this);
    },
    toArray: function() {
        return Array.from(this);
    },
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                let keys = Object.keys(this);
                return index >= keys.length
                    ? {
                        done: true
                    }
                    : {
                        value: this[keys[index++]]
                    }
            }
        }
    }
}
// let data = {
//     "operation": "add",
//     "data": {
//         "emm": 0,
//         "emmm": 1
//     }
// }
// let demo = new Operation(data);
// console.log(demo);

module.exports = Operation;
