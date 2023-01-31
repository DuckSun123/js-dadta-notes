console.log("data");
// 데이터 종류(자료형)
// Stling, Number, Boolean, Undefined, Null, Object, Array

// Stling(문자데이터)
// 따옴표('', "")를 사용함
let myName = "lee";
let email = "happiness-0613@naver.com";
let hello = `Hello ${myName}?!`;
// 보관법
// `${}`
// 맥북 백틱기호 -> option + ₩

console.log(myName);
console.log(email);
console.log(hello);

///////////////////////////////////////////////////////////////////////

// Number(숫자데이터)
// 정수 및 부동소수점 숫자를 나타냄
let number = 123;
let opacity = 1.23;

console.log(number);
console.log(opacity);

///////////////////////////////////////////////////////////////////////

// Boolean(불린데이터)
// true, false 두 가지 값밖에 없는 논리 데이터
let checked = true;
let isShow = false;

console.log(checked);
console.log(isShow);

///////////////////////////////////////////////////////////////////////

// Undefined
// 값이 할당되지 않은 상태
let undef;
let obj = { abc: 123 };
//{ abc: 123} 객체데이터

console.log(undef);
console.log(obj.abc);
// obj 안에 abc를 찾는다
console.log(obj.qwe); // undefined

///////////////////////////////////////////////////////////////////////

// Null
// 어떤 값이 의도적으로 비어있음을 의미함 (의도적으로 비어있는게 중요함)
let empty = null;

console.log(empty);

///////////////////////////////////////////////////////////////////////

// Object
// 여러 데이터를 Key:Value 형태로 저장
let = user = {
  // Key:Value,
  이름: "Lee",
  나이: "30",
  isValid: true,
};

console.log(user.이름);
console.log(user.나이);
console.log(user.isValid);

///////////////////////////////////////////////////////////////////////

// Array(배열 데이터)
// 여러 데이터를 순차적으로 저장함.
// 대괄호를 사용함 []
let fruits = ["apple", "bananan", "orange"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
