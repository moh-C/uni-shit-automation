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

var vahed_change = "420107823";

window.frames[2].frames["Master"].frames["Form_Body"].document
  .querySelector("#ChngButt")
  .click();

window.frames[2].frames["Master"].frames["Form_Body"].document.querySelector(
  "#F01852"
).value = vahed_change.slice(0, 2);

window.frames[2].frames["Master"].frames["Form_Body"].document.querySelector(
  "#F01902"
).value = vahed_change.slice(2, 4);

window.frames[2].frames["Master"].frames["Form_Body"].document.querySelector(
  "#F01952"
).value = vahed_change.slice(4, 7);

window.frames[2].frames["Master"].frames["Form_Body"].document.querySelector(
  "#F51707"
).value = vahed_change.slice(7, 9);

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
