function Essay({obj = {
    "title" : "title"
}}) {
    this.title = obj.title || 'title';
    this.brief = obj.brief || 'brief';
    this.author = obj.author || 'author';
    this.time = obj.time || 'time';
    this.content = obj.content || 'content';

    this.tags = obj.tags || [];
}

Essay.prototype = {
    construct: Essay,
    addSql: function({
        table = "blog"
    } = {}) {
        let sql = "INSERT INTO " + table + " SET ?";
        let data = this.toString();

        let essaySql = {
            "operation": "add",
            "data": {
                "sql": sql,
                "data": data
            }
        }
        return essaySql;
    },
    toString: function() {
        return JSON.stringify(this);
    }
}

module.exports = Essay;
