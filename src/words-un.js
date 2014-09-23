var _ = require('underscore');

function search(word) {
  var exclude = _.filter(word, function(w) {
    return w != "?" && w != "_";
  });

  var excludePattern = "",
    toSearch = "";

  _.each(exclude, function(c) {
    excludePattern += "^" + c;
  });

  excludePattern = "[" + excludePattern + "]";
  
  toSearch = "^" + word.replace(/\?/g, excludePattern) + "$";

  toSearch = "^" + toSearch.replace(/\_/g, "[a-z]") + "$";

  if(word.indexOf("/") >= 0) {
    toSearch = word.replace(/\//g, "");
  }

  var result = _.filter(dictionary, function(w) {
    return w.match(new RegExp(toSearch, "i"));
  });

  return {
    result: result,
    excludePattern: excludePattern,
    searchPattern: toSearch
  };
}

exports.search = search;

var dictionary = [
  "AA",
  "SAPIENT",
  "ADI",
  "AALII",
  "AALIIS",
  "AALS",
  "AARDVARK",
  "AARDVARKS",
  "AARDWOLF",
  "AARDWOLVES",
  "AARGH",
  "AARRGH",
  "AARRGHH",
  "AAS",
  "AASVOGEL",
  "AASVOGELS",
  "AB",
  "ABA",
  "ABAC",
  "ABACA",
  "ABACAS",
  "ABACI",
  "ABACK",
  "ABACS",
  "ABACTERIAL",
  "ABACTINAL",
  "ABACTOR",
  "ABACTORS",
  "ABACUS",
  "ABACUSES",
  "ABAFT",
  "ABAKA",
  "ABAKAS",
  "ABALONE",
  "ABALONES",
  "ABAMP",
  "ABAMPERE",
  "ABAMPERES",
  "ABAMPS",
  "ABAND",
  "ABANDED",
  "ABANDING",
  "ABANDON",
  "ABANDONED",
  "ABANDONEE",
  "ABANDONEES",
  "ABANDONER",
  "ABANDONERS",
  "ABANDONING",
  "ABANDONMENT",
  "ABANDONMENTS",
  "ABANDONS",
  "ABANDS",
  "ABAPICAL",
  "ABAS",
  "ABASE",
  "ABASED",
  "ABASEDLY",
  "ABASEMENT",
  "ABASEMENTS",
  "ABASER",
  "ABASERS",
  "ABASES",
  "ABASH",
  "ABASHED",
  "ABASHEDLY",
  "ABASHES",
  "ABASHING",
  "ABASHLESS",
  "ABASHMENT",
  "ABASHMENTS",
  "ABASIA",
  "ABASIAS",
  "ABASING",
  "ABASK",
  "BALA",
  "ZYTHUMS",
  "ZYZZYVA",
  "ZYZZYVAS"
];

