var str = prompt("Enter the array for sorting:");
var cmd = prompt("Enter the sort format");
var arr = str.split(',');

function specialsort(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
        return Number(a) - Number(b);
    } else if (!isNaN(a) && isNaN(b)) {
        return 1;
    } else if (isNaN(a) && !isNaN(b)) {
        return -1;
    } else {
        return a.localeCompare(b);
    }
}

function specialsortreverse(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
        return Number(b) - Number(a);
    } else if (!isNaN(a) && isNaN(b)) {
        return -1;
    } else if (isNaN(a) && !isNaN(b)) {
        return 1;
    } else {

        return b.localeCompare(a);
    }
}

if (cmd == "a-z:0-9") {
    var form1 = arr.sort(specialsort);
    alert(form1.join(', '));
} else if (cmd == "z-a:9-0") {
    var form2 = arr.sort(specialsortreverse);
    alert(form2.join(', '));
} else if (cmd == "a-z") {
    var charsOnly = arr.filter(item => !isNaN(item));
    var form3 = charsOnly.sort((a, b) => a - b);
    alert(form3);
}
else if (cmd == "z-a") {
    var charsOnly = arr.filter(item => !isNaN(item));
    var form3 = charsOnly.sort((a, b) => b - a);
    alert(form3);
}
else if (cmd == "0-9") {
    var numbersonly = arr.filter(item => !isNaN(item));
    var form4 = numbersonly.sort((a, b) => Number(a) - Number(b));
    // var sortedArray = arr.map(item => (!isNaN(item) ? numbersonly.shift() : item));
    alert(form4.join(', '));
} else if (cmd == "9-0") {
    var numbersonly = arr.filter(item => !isNaN(item));
    var form4 = numbersonly.sort((a, b) => Number(b) - Number(a));
    alert(form4.join(', '));
} else {
    alert("invalid value");
}
