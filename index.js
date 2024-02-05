if (localStorage.getItem("firstValue") != null) {
  document.querySelector(".inputField1").value =
    localStorage.getItem("firstValue");
}

var firstFieldData1;
var count = 0;
document.querySelector(".inputField1").addEventListener("focusout", () => {
  firstFieldData1 = document.querySelector(".inputField1").value;
  if (firstFieldData1 == "" || firstFieldData1 == null) {
    document.querySelector("#check1").setAttribute("disabled", true);
  } else {
    document.querySelector("#check1").removeAttribute("disabled");
  }
});

var firstFieldData2;
document.querySelector(".inputField2").addEventListener("focusout", () => {
  firstFieldData2 = document.querySelector(".inputField2").value;
  localStorage.setItem("secondValue", firstFieldData2);
  if (firstFieldData2 == "" || firstFieldData2 == null) {
    document.querySelector("#check2").setAttribute("disabled", true);
  } else {
    document.querySelector("#check2").removeAttribute("disabled");
  }
});

var firstFieldData3;
document.querySelector(".inputField3").addEventListener("focusout", () => {
  firstFieldData3 = document.querySelector(".inputField3").value;
  localStorage.setItem("thirdValue", firstFieldData3);
  if (firstFieldData3 == "" || firstFieldData3 == null) {
    document.querySelector("#check3").setAttribute("disabled", true);
  } else {
    document.querySelector("#check3").removeAttribute("disabled");
  }
});

var check1;
var check2;
var check3;
document.querySelector("#check1").addEventListener("click", updateProgressBar);
document.querySelector("#check2").addEventListener("click", updateProgressBar);
document.querySelector("#check3").addEventListener("click", updateProgressBar);

function updateProgressBar() {
  check1 = document.querySelector("#check1").checked;
  check2 = document.querySelector("#check2").checked;
  check3 = document.querySelector("#check3").checked;

  if (check1) {
    $(".inputField1").addClass("underline");
  } else {
    $(".inputField1").removeClass("underline");
  }

  if (check2) {
    $(".inputField2").addClass("underline");
  } else {
    $(".inputField2").removeClass("underline");
  }

  if (check3) {
    $(".inputField3").addClass("underline");
  } else {
    $(".inputField3").removeClass("underline");
  }

  var totalWidth = 0;

  if (check1) {
    totalWidth += 33.33;
  }

  if (check2) {
    totalWidth += 33.33;
  }

  if (check3) {
    totalWidth += 33.33
  }

  document.querySelector(".progress-bar").style.width = totalWidth + "%";
  localStorage.setItem("progressBarData", document.querySelector(".progress-bar").style.width = totalWidth + "%")
}

document.querySelector(".innerDataRange").innerHTML = count;

document.querySelector("#check1").addEventListener("click", () => {
  if (document.querySelector("#check1").checked) {
    count++;
  }

  if (!document.querySelector("#check1").checked) {
    count--;
  }

  document.querySelector(".innerDataRange").innerHTML = count;

  if (count == 3) {
    document.querySelector(".error").innerText = "Congratulations 🎉";
    
    $(".error").addClass("animation");
  }else{
    $(".error").removeClass("animation");
    document.querySelector(".error").innerText = "Please set all the 3 goals!";
  }
});

document.querySelector("#check2").addEventListener("click", () => {
  if (document.querySelector("#check2").checked) {
    count++;
  }

  if (!document.querySelector("#check2").checked) {
    count--;
  }
  document.querySelector(".innerDataRange").innerHTML = count;

  if (count == 3) {
    document.querySelector(".error").innerText = "Congratulations 🎉";
    $(".error").addClass("animation");
  } else {
    $(".error").removeClass("animation");
    document.querySelector(".error").innerText = "Please set all the 3 goals!";
  }
});

document.querySelector("#check3").addEventListener("click", () => {
  if (document.querySelector("#check3").checked) {
    count++;
  }

  if (!document.querySelector("#check3").checked) {
    count--;
  }
  document.querySelector(".innerDataRange").innerHTML = count;

  if (count == 3) {
    document.querySelector(".error").innerText = "Congratulations 🎉";
    $(".error").addClass("animation");
  } else {
    $(".error").removeClass("animation");
    document.querySelector(".error").innerText = "Please set all the 3 goals!";
  }
});