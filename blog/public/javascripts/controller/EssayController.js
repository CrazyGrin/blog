let Essay = require('../model/Essay');
let Operation = require('../model/Operation');

function EssayController() {}

EssayController.prototype = {
    construct: EssayController,
    add_: function({
        essay,
        table = "essays"
    } = {}) {
        let sql = "INSERT INTO " + table + " SET ?";
        let operation = new Operation({
            operation: "add",
            data: {
                sql: sql,
                essay: essay
            }
        });
        return operation;
    },
    selectById_: function({
        id,
        table = "essays"
    } = {}) {
        let sql = "SELECT * FROM " + table + " WHERE id=?";
        let operation = new Operation({
            operation: "selectById",
            data: {
                sql: sql,
                id: id
            }
        });
        return operation;
    },
    deleteById_: function({
        id,
        table = "essays"
    } = {}) {
        let sql = "UPDATE " + table + " SET state=0 WHERE id=?";
        let operation = new Operation({
            operation: "deleteById",
            data: {
                sql: sql,
                id: id
            }
        });
        return operation;
    },
    updateById_: function({
        id,
        essay,
        table = "essays"
    } = {}) {
        let sql = "UPDATE " + table + " SET title=?, brief=?, time=?, content=?";
        let operation = new Operation({
            operation: "updateById",
            data: {
                sql: sql,
                id: id,
                essay: essay
            }
        });
        return operation;
    }
}

// let demo = new EssayController();
// let essay = new Essay();
// console.log(demo.add_({essay: new Essay()}));
// console.log(demo.selectById_({id: 1, table: "user"}));
// console.log(demo.deleteById_({id: 1, table: "user"}));
// console.log(demo.updateById_({id: 1, essay, table: "user"}));
module.exports = EssayController;
