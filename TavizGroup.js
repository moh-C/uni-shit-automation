var counter = 0;

function taviz() {
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

  window.frames[2].frames["Commander"].document
    .querySelector("#IM13_Do")
    .click();
}

function closeDialog() {
  document
    .querySelectorAll(
      "body > div.ui-dialog-titlebar.ui-widget-header.ui-corner-all.ui-helper-clearfix.ui-draggable > a"
    )[0]
    .click();
}

function openDialog() {
  window.frames[1].frames["Master"].frames["Form_Body"].document
    .querySelector("#L1")
    .click();
}

var myInterval = setInterval(() => {
  if (counter % 3 == 0) openDialog();
  else if (counter % 3 == 1) taviz();
  else closeDialog();
  counter++;
}, 5000);

//clearInterval(myInterval);
