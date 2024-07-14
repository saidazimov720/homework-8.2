var str = prompt("Enter the array for sorting:");
var cmd = prompt("Enter the sort format");
var arr = str.split(',');


if (cmd == "a-z") {
    var form1 = arr.sort((a, b) => a - b);
    alert(form1);
} else if (cmd == "z-a") {
    var form2 = arr.sort().reverse();
    alert(form2);
} else if (cmd == "0-9") {
    var form3 = arr.sort((a, b) => Number(a) - Number(b));
} else {
    alert("invalid value");
}