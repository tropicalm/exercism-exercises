module.exports = function(str) {
    return {
        get count() {
            return str.toLowerCase()
                      .match(/\w+/g) // words only
                      .reduce(countByName, {});
        }
    }
}

var countByName = function(result, name) {
    var val = result[name];
    result[name] = val ? val + 1 : 1;
    return result;
}
