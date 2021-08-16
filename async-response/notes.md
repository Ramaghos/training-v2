# 5. Below code simulates async response that varies in time duration due to which result do not match sequence in which promise are called.

Steps:

- Open chrome browser console
- And run below code or use code on link https://jsbin.com/daculacoja/edit?js,console

var autoCompleteStr = "";
var arrPromise = [];
for (var i = 0; i < 5; i++) {
autoCompleteStr += (i + 10).toString(36);
console.log("User entered: ", autoCompleteStr)
var promiseObj = new Promise(function(resolve, reject) {
var timeTaken = Math.round(Math.random() \* 1000);
setTimeout(resolve, timeTaken, [autoCompleteStr, timeTaken]);
});
arrPromise.push(promiseObj)
}
for (var indx in arrPromise) {
arrPromise[indx].then(function(values) {
console.log(values);
});
}

Expected result: Only log promise result if this came in sequence of user input.
E.g. In above screenshot – expected is to have
[“abc”, 445]
[“abcde”, 792]
