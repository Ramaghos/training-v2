async function asyncCall() {
  var autoCompleteStr = "";
  var arrPromise = [];
  var timeTaken;
  for (var i = 0; i < 5; i++) {
    autoCompleteStr += (i + 10).toString(36);
    console.log("User entered: ", autoCompleteStr);
    var promiseObj = new Promise(function (resolve, reject) {
      timeTaken = Math.round(Math.random() * 1000);

      setTimeout(resolve, timeTaken, [autoCompleteStr, timeTaken]);
    });
    console.log("aftersettimeout: ", autoCompleteStr, timeTaken);
    arrPromise.push(promiseObj);
  }

  var updatedStringLength = -1;
  for (var indx in arrPromise) {
    const values = await arrPromise[indx];
    if (values[0].length > updatedStringLength) {
      console.log(values);
      updatedStringLength = values[0].length;
    }
  }
}

asyncCall();
