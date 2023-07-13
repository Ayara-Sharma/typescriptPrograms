var arr = [25, 24, 5, 2, 40, 2, 8, 9, 1, 0];
var swap;
for (var i = 0; i < arr.length; i++) {
    for (var j = i; j <= arr.length; j++) {
        if (arr[i] > arr[j]) {
            swap = arr[i];
            arr[i] = arr[j];
            arr[j] = swap;
        }
    }
}
console.log(arr);
