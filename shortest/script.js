var arr = [1, 2, 3, 4, 5, 6, 7, 8, 6, 9];
var target = 6;
var foundIndex = -1;

arr.find((num, index) => {
    if (num === target) {
        foundIndex = index;
    }
    
})
var arr = [1, 2, 5, 6, 7, 8, 9, 6, 3, 6];

var foundElem = arr.find(findElem);
var foundIndex = -1;
function findElem(element, index, array) {
  if (element != 6) {
    return false;
  }

  if (element === 6 && array.indexOf(6, index + 1) && foundIndex === -1) {
    foundIndex = array.indexOf(6, index + 1);
    return false;
  }
  if (element === 6 && foundIndex !== -1) {
    return true;
  }
  return false;
}
