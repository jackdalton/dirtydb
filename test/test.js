const assert = require("assert");
const DirtyDB = require("../");
const fs = require("fs");

describe("DirtyDB", function() {
    fs.writeFileSync("test/test1.json", fs.readFileSync("test/test.json"));
    let dirtyInstance = new DirtyDB("test/test1.json");
    it("should properly read a JSON file", function() {
        assert.equal(dirtyInstance.read().a, "abc");
        assert.equal(dirtyInstance.read("a"), "abc");
    });
    it("should properly write to a JSON file", function() {
        let customData = dirtyInstance.read();
        customData["a"] = "def";
        dirtyInstance.write(customData);
        assert.equal(customData.a, dirtyInstance.read("a"));
        fs.unlinkSync("test/test1.json");
    });
});
