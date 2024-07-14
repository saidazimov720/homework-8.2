var arr = [1, 2, 3, 4, 5, 6, 7, 8, 6, 9];
var target = 6;
var foundIndex = -1;
arr.find((num, index) => {
    if (num === target) {
        foundIndex = index;
    }
    return false;
});
if (foundIndex !== -1) {
    console.log(foundIndex);
    console.log(arr[foundIndex]);
} else {
    console.log("Element not found");
}