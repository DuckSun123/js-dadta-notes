console.log("function");
// 함수(function) 특정 동작(기능)을 수행하는 일부 코드의 집합(부분)

// 함수 선언
function qwe() {
  // 실행코드
  console.log(123);
}

// 함수 호출
qwe();

//---------------------------------------------------------------

// return
function returnFunc() {
  return 345;
}

let n = returnFunc();

console.log(n);

//---------------------------------------------------------------

// 함수 선언
function sum(a, b) {
  // a와 b는 매개변수(Parameters)
  // 데이터를 받아주는 매개체가되는 변수라고 해서 매개변수
  return a + b;
}

// 재사용
let o = sum(1, 8); // 1과 2는 인수(Arguments)
let u = sum(2, 0);
let i = sum(4, 7);

console.log(o, u, i);

//---------------------------------------------------------------

// 기명(이름이 있는) 함수
// 함수 선언*
function hey() {
  console.log("hey");
}

// 익명(이름이 없는) 함수
// 함수 표현*
// 대부분 익명함수들은 데이터나 변수에 할당해서 사용됨
let baby = function () {
  console.log("baby");
};

hey();
baby();

//---------------------------------------------------------------

//객체 데이터
const heropy = {
  name: "heropy",
  age: 100,
  // 메소드(Method)
  // 속성 부분에 함수가 할당되어 있으면 메소드라고 부른다
  getName: function () {
    return this.name;
  },
};

const hisName = heropy.getName();
console.log(hisName);
// 혹은
console.log(heropy.getName());
