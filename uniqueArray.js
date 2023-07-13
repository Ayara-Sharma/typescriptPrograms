var arr = [1, 2, 3, 4, 5, 1, 5, 5, 1, 2, "ayer"];
var result = {};
for (var i = 0; i < arr.length; i++) {
    if (!(arr[i] in result)) {
        result[arr[i]] = 1;
    }
}
console.log(Object.keys(result));
