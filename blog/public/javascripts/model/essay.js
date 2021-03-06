function Essay({
    title = "title",
    brief = "brief",
    time = "tiem",
    content = "content"
} = {}) {
    this.title = title;
    this.brief = brief;
    this.time = time;
    this.content = content;
}

Essay.prototype = {
    construct: Essay,
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

module.exports = Essay;
