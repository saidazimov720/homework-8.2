var str = prompt("Enter the array for sorting:");
var cmd = prompt("Enter the sort format");
var arr = str.split(',');

function sort(a,b) {
    if (!isNaN(a) && !isNaN(b)) {
        return Number(a) - Number(b);
    } else if(!isNaN(a) && isNaN(b)){
        return 1;
    } else if(isNaN(a) && !isNaN(b)){
        return -1;
    } else{
        return a.localeCompare(b);    
    }
}

function sortreverse(a,b) {
    if (!isNaN(a) && !isNaN(b)) {
        return Number(b) - Number(a);
    } else if(!isNaN(a) && isNaN(b)){
        return -1;
    } else if(isNaN(a) && !isNaN(b)){
        return 1;
    } else{
        b.localeCompare(a);
    }
}

if (cmd == "a-z") {
    var form1 = arr.sort();
    alert(form1.join(', '));
} else if (cmd == "z-a") {
    var form2 = arr.sort().reverse();
    var strform2 = form2.toString();
    alert(strform2.join(', '));
} else if (cmd == "0-9") {
    var form3 = arr.sort((a, b) => Number(a) - Number(b));
    alert(form3.join(', '));
} else if (cmd == "9-0") {
    var form4 = arr.sort((a, b) => Number(b) - Number(a));
    alert(form4.join(', '));
} else {
    alert("invalid value");
}
