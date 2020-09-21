var vahed_ = "420106423";

var len = window.frames[2].frames["Master"].frames[
  "Form_Body"
].document.getElementsByClassName("TableDataRow").length;

for (var i = 0; i < len; i++) {
  var obj = window.frames[2].frames["Master"].frames[
    "Form_Body"
  ].document.getElementsByClassName("TableDataRow")[i];

  if (obj.cells[4].innerHTML == vahed_.slice(0, 2))
    if (obj.cells[3].innerHTML == vahed_.slice(2, 4))
      if (obj.cells[2].innerHTML == vahed_.slice(4, 7)) obj.click();
}

var len2 = window.frames[2].frames["Master"].frames[
  "Form_Body"
].document.getElementsByClassName("Inserted").length;
for (var i = 0; i < len2; i++) {
  var obj = window.frames[2].frames["Master"].frames[
    "Form_Body"
  ].document.getElementsByClassName("Inserted")[i];

  if (obj.cells[5].innerHTML == vahed_.slice(0, 2))
    if (obj.cells[4].innerHTML == vahed_.slice(2, 4))
      if (obj.cells[3].innerHTML == vahed_.slice(4, 7))
        obj.cells[2].childNodes[0].value = vahed_.slice(7, 9);
}

setTimeout(() => {
  window.frames[2].frames["Commander"].document
    .querySelector("#IM13_Do")
    .click();
}, 200);
