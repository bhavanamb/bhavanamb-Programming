let objectStr1;
let objectStr2;

function addToDic(s) {
  let letterDict = {};
  s = s.toLowerCase();

  for (let i of s) {
    letterDict[i] = letterDict[i] + 1 || 1;
  }
  return letterDict;
}
function checkMatch(strObj1, strObj2) {
  if (Object.keys(strObj1).length != Object.keys(strObj2).length) {
    return false;
  }
  for (let key of Object.keys(strObj1)) {
    if (strObj1[key] != strObj2[key]) {
      return false;
    }
  }
  return true;
}

var s1 = "finder";
var s2 = "friend";
objectStr1 = addToDic(s1);
objectStr2 = addToDic(s1);
if (checkMatch(objectStr1, objectStr2)) {
  console.log("It's anagram");
}
