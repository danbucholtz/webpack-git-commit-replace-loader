var utils = require("loader-utils");
var git = require("git-rev");

module.exports = function(source){
    this.cacheable();
    var callback = this.async();

    var query = utils.parseQuery(this.query);

    git.short(function(hash){
        source = source.replace(query.toReplace, hash);
        callback(null, source);
    })
}
