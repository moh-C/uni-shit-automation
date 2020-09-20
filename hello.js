var len = window.frames[2].frames["Master"].frames[
  "Form_Body"
].document.getElementsByClassName("TableDataRow").length;

for (var i = 0; i < len; i++) {
  var obj = window.frames[2].frames["Master"].frames[
    "Form_Body"
  ].document.getElementsByClassName("TableDataRow")[i];

  if (obj.cells[4].innerHTML == "23")
    if (obj.cells[3].innerHTML == "01")
      if (obj.cells[2].innerHTML == "010") obj.click();
}

var len2 = window.frames[2].frames["Master"].frames[
  "Form_Body"
].document.getElementsByClassName("Inserted").length;
for (var i = 0; i < len2; i++) {
  var obj = window.frames[2].frames["Master"].frames[
    "Form_Body"
  ].document.getElementsByClassName("Inserted")[i];

  if (obj.cells[5].innerHTML == "23")
    if (obj.cells[4].innerHTML == "01")
      if (obj.cells[3].innerHTML == "010")
        obj.cells[2].childNodes[0].value = "21";
}

window.frames[2].frames["Commander"].document
  .querySelector("#IM08_Control")
  .click();

/* ---------------------------------------------------------------------- */

window.frames[2].frames["Master"].frames["Form_Body"].document
  .querySelector("#ChngButt")
  .click();

window.frames[2].frames["Master"].frames["Form_Body"].document.querySelector(
  "#F01852"
).value = "42";

window.frames[2].frames["Master"].frames["Form_Body"].document.querySelector(
  "#F01902"
).value = "01";

window.frames[2].frames["Master"].frames["Form_Body"].document.querySelector(
  "#F01952"
).value = "078";

window.frames[2].frames["Master"].frames["Form_Body"].document.querySelector(
  "#F51707"
).value = "20";

window.frames[2].frames["Master"].frames["Form_Body"].document
  .querySelector("#DoCh")
  .click();

/* --------------------------------------------------------------  */
var len = window.frames[2].frames["Master"].frames[
  "Form_Body"
].document.getElementsByClassName("TableDataRow").length;

for (var i = 0; i < len; i++) {
  var obj = window.frames[2].frames["Master"].frames[
    "Form_Body"
  ].document.getElementsByClassName("TableDataRow")[i];

  if (obj.cells[4].innerHTML == "23")
    if (obj.cells[3].innerHTML == "01")
      if (obj.cells[2].innerHTML == "016") obj.click();
}

var len2 = window.frames[2].frames["Master"].frames[
  "Form_Body"
].document.getElementsByClassName("Inserted").length;
for (var i = 0; i < len2; i++) {
  var obj = window.frames[2].frames["Master"].frames[
    "Form_Body"
  ].document.getElementsByClassName("Inserted")[i];

  if (obj.cells[5].innerHTML == "23")
    if (obj.cells[4].innerHTML == "01")
      if (obj.cells[3].innerHTML == "016")
        obj.cells[2].childNodes[0].value = "10";
}

window.frames[2].frames["Commander"].document.querySelector("#IM13_Do").click();
