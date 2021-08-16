function reverseString(sentence) {
  let newString = "";
  for (let i = sentence.length - 1; i >= 0; i--) {
    newString += sentence[i];
  }
  return newString;
}
const string = prompt("Enter your full Name :");
const reversedName = reverseString(string);
console.log(reversedName);
if (string != null) {
  document.getElementById("rev").innerHTML =
    "Hello " + string + "," + "Your name is reversed to :" + reversedName;
}
