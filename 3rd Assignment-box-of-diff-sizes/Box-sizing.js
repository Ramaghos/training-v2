var names = [
  { height: "100px", width: "100px", background: "orange", Text: "courage" },
  { height: "75px", width: "75px", background: "white", Text: "purity" },
  { height: "50px", width: "50px", background: "white", Text: "peace" },
  { height: "25px", width: "200px", background: "green", Text: "faith" },
];
for (let i of names) {
  var div = document.createElement("div");
  div.style.width = i.width;
  div.style.height = i.height;
  div.style.background = i.background;
  div.style.margin = "10px";
  div.innerHTML = i.Text;
  document.getElementById("box").appendChild(div);
}
