var str = prompt("Enter the array for sorting:");
var cmd = prompt("Enter the sort format");
var arr = str.split(',');


if (cmd == "a-z") {
    var form1 = arr.sort((a, b) => a - b);
    alert(form1);
} else if(cmd =="z-a" ) {
    var form2 = arr.sort((a,b) => b-a);
    alert(form2);
}