//Dom catch

//RBG
const redValue = document.getElementById("red_value");
const greenValue = document.getElementById("green_value");
const blackValue = document.getElementById("black_value");
const form = document.forms[0];
//HELX
const helxValue = document.getElementById("helx_value_section");
const helxcolor = document.getElementById("helx_color_section");

//feedback
const feedBack = document.querySelector(".feedback");

const dic = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F"
};

//listentoRGB
form.addEventListener("submit", function (event) {
  event.preventDefault();

  //將正常運作狀況限定在  值為 0~255間

  if (
    0 <= parseInt(redValue.value) &&
    parseInt(redValue.value) <= 255 &&
    0 <= parseInt(greenValue.value) &&
    parseInt(greenValue.value) <= 255 &&
    0 <= parseInt(blackValue.value) &&
    parseInt(blackValue.value) <= 255
  ) {
    let Rvalue = parseInt(redValue.value)
    let Gvalue = parseInt(greenValue.value)
    let Bvalue = parseInt(blackValue.value)

    console.log(Rvalue)
    console.log(convertRBGtoHex(Rvalue, Gvalue, Bvalue))

    helxValue.innerHTML = `<span> ${convertRBGtoHex(Rvalue, Gvalue, Bvalue)} </span>`
    printHexColor(convertRBGtoHex(Rvalue, Gvalue, Bvalue))
    //清除前次convert結果
    feedBack.innerHTML = ""
  } else if (
    redValue.value === "" ||
    greenValue.value === "" ||
    blackValue.value === ""
  ) {
    // 例外處裡 空白
    feedBack.innerHTML = `<span>欄位不可是空白</span>`;
    //清除前次的convert結果 
    helxValue.innerHTML = " "
    helxcolor.innerHTML = " "

  } else {
    //例外處理 不是數字 或 不再範圍內的數字
    feedBack.innerHTML = `<span> 請輸入0~255的數字 </span> `;
    //清除前次的convert結果 
    helxValue.innerHTML = " "
    helxcolor.innerHTML = " "
  }
});

//function


function convertRBGtoHex(R, G, B) {
  let RtoHex = trans(R)
  let GtoHex = trans(G)
  let BtoHex = trans(B)

  let hex = `#${RtoHex}${GtoHex}${BtoHex}`

  return hex
}

function trans(n) {
  let q = parseInt(n / 16);
  const r = n % 16;

  const q2 = dic[q].toString();
  const r2 = dic[r].toString();

  const res = q2 + r2;

  return res;
}

function printHexColor(hex) {
  helxcolor.innerHTML = `<div class="colorCard" style ="background-color:${hex};">  </div>`
}



