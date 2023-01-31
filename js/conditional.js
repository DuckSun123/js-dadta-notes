console.log("conditional");

// 조건문 (조건의 결과(truthy, falsy)에 따라 다른 코드를 실행하는 구문)
// if, else

let isShow1 = true;
let checked1 = false;

if (isShow1) {
  //만약 (이것)이 참이면
  console.log("Show");
  // console.log로 SHow를 보여줘
}
// istShow는 true니까 잘 나옴

if (checked1) {
  //만약 (이것)이 참이면
  console.log("Checked");
  // console.log로 Ckecked를 보여줘
}
// checked1는 false라 안나옴

//---------------------------------------------------------------

let isShow2 = true;

if (isShow2) {
  console.log("Show");
} else {
  console.log("hide?");
}

let isShow3 = false;

if (isShow3) {
  console.log("Show");
} else {
  console.log("hide?");
}
