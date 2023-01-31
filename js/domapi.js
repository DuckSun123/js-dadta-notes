console.log("DOM API");

// DOM API
// Document Object Model(DOM), Application Programming Interface(API)
// DOM(html요소들(div, span 등등))
// API(웹사이트가 동작하기위한 프로그래밍 명령(js애서 html을 제어할때 하는 명령들))

// // HTML 요소(Element) 1개 검색/찾기
// let boxEl = document.querySelector(".box");
// // querySelector은 가장 먼저 찾아진 요소 하나만 반영
// console.log(boxEl);
// // HTML 요소애 적용할 수 있는 매소드
// boxEl.addEventListener();

// 인수(Arguments)를 추가 가능
// boxEl.addEventListener(1, 2);

// 1 - 이벤트(Event,상황)
// boxEl.addEventListener("click", 2);

// //2 - 핸들러(Handler, 실행할 함수)
// boxEl.addEventListener("click", function () {
//   //함수를 넣을 수 있다
//   console.log("Click");
// });

// //요소의 클래스 정보 객체 활용
// boxEl.classList.add("active");

// let isContains = boxEl.classList.contains("active");
// // isContains를 선언하고 이것은 boxEl에 클래스(classList) 포함(contains) 하니?
// // 있으면 true 없으면 false
// console.log(isContains);

// isContains = boxEl.classList.remove("active");
// console.log(isContains);

// boxEl.addEventListener("click", function () {
//   boxEl.classList.add("active");
//   console.log("click");
//   console.log(boxEl.classList.contains("active"));
//   boxEl.classList.remove("active");
//   console.log(boxEl.classList.contains("active"));
// });

//------------------------------------------------------------------------

// const boxEls = document.querySelectorAll(".box");
// console.log(boxEls);

// // 찾은 요소들을 반복해서 실행(forEach)
// // 익명의 함수를 인수로 추가
// boxEls.forEach(function () {});

// // 첫 번째 매개변수(boxEls): 반복 중인 요소
// // 두 번째 매개변수(index): 반복중인 번호
// boxEls.forEach(function (boxEls, index) {});

// // 출력
// boxEls.forEach(function (box, index) {
//   box.classList.add(`order-${index + 1}`);
//   console.log(index, box);
// });

//------------------------------------------------------------------------

const boxEl = document.querySelector(".box");

// Getter, 값을 얻는 용도
console.log(boxEl.textContent);

// // Setter, 값을 지정하는 용도
// boxEl.textContent = "LEE!!";
// console.log(boxEl.textContent);
