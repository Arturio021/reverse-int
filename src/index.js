module.exports = function reverse(n) {
    n = Math.abs(n);
    var str = String(n);
    var arr = str.split("");
    var arrResult = [];
    for (var i = arr.length - 1; i >= 0; --i) {
        arrResult += arr[i];
    }
    console.log(arrResult);

    return arrResult;
}