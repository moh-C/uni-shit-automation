var firstTime = true;

function selectVahed() {
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
}

function chooseVahed() {
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

var myInterval = setInterval(() => {
  if (firstTime) {
    selectVahed();
    firstTime = !firstTime;
  } else chooseVahed();
}, 5000);

//clearInterval(myInterval);
