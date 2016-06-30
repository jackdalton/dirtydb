const fs = require("fs");

module.exports = (function() {
    let db, filePath;
    function DirtyDB(path) {
        filePath = path;
        fs.access(filePath, fs.F_OK, function(err) {
            if (!err) {
                db = JSON.parse(fs.readFileSync(filePath));
            } else {
                throw new ReferenceError("File " + filePath + " does not exist.");
            }
        });
    }

    function forceUpdate() {
        db = JSON.parse(fs.readFileSync(filePath));
    }

    function writeDB() {
        fs.writeFileSync(filePath, JSON.stringify(db));
    }

    DirtyDB.prototype.read = function(key) {
        let sym = Symbol();
        key = key || sym;
        forceUpdate();
        return key == sym ? db : db[key];
    };

    DirtyDB.prototype.write = function(data) {
        db = data;
        writeDB();
        return db;
    };

    return DirtyDB;
})();
